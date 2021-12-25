import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Searchbar } from 'react-native-paper'
import normalize from '../../constants/normalize'
import PhotographerList from './PhotographerList'
import CategoryList from './CategoryList'
import RecentUploads from './RecentUploads'
import auth from '@react-native-firebase/auth'

export default function NewsFeed({navigation}) {
    const photographerList = [
        { id: 1, name: 'Kaniz Fatima Tonni', img: require('../Images/1.jpg'), location: 'Chittagong' },
        { id: 2, name: 'Maliha Zahan CHowdhury', img: require('../Images/2.jpg'), location: 'CUET' },
        { id: 3, name: 'Sabitri Shikhdar', img: require('../Images/3.jpg'), location: 'SK Hall' },
        { id: 4, name: 'Adiba Ibnat Hossain', img: require('../Images/1.jpg'), location: 'Dhaka' },
        { id: 5, name: 'Taslima Toma', img: require('../Images/2.jpg'), location: 'Chittagong' },
        { id: 6, name: 'M H Saif', img: require('../Images/3.jpg'), location: 'Comilla' },
    ];

    const categoryList = [
        { id: 1, name: 'Wedding', img: 'https://cdn-icons.flaticon.com/png/512/2442/premium/2442780.png?token=exp=1640001619~hmac=455da6efde1c8b7f81a499f37c0ab005' },
        { id: 2, name: 'Fashion', img: 'https://cdn-icons-png.flaticon.com/512/3050/3050198.png' },
        { id: 3, name: 'Sports', img: 'https://cdn-icons-png.flaticon.com/512/857/857492.png' },
        { id: 4, name: 'Portrait', img: 'https://cdn-icons-png.flaticon.com/512/656/656455.png' },
        { id: 5, name: 'Event', img: 'https://cdn-icons.flaticon.com/png/512/2558/premium/2558906.png?token=exp=1640005912~hmac=7e0656696d7cd36e6a1fa30eb15e9f9c' },
        { id: 6, name: 'Travel', img: 'https://cdn-icons-png.flaticon.com/512/620/620896.png' },
        { id: 7, name: 'LifeStyle', img: 'https://cdn-icons-png.flaticon.com/512/2751/2751585.png' },
    ];

    const onSignOut = () => {
        try {
            auth()
            .signOut()
            .then(() => console.log('User signed out!'));
            navigation.navigate('WelcomeScreen');
        } catch(error) {
            console.log(error);
        }
        
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 0.1, justifyContent: 'center', marginHorizontal: normalize(20)}}>
                <Text style={Styles.headerText}>Picturesque</Text>
                <TouchableOpacity onPress={onSignOut}>
                    <Text>logout</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.9, paddingHorizontal: normalize(20)}}>
                <Searchbar style={{height: 50, width: '100%'}} placeholder='Search your choices...' />

                {/* Photographer section */}
                <PhotographerList photographerList={photographerList} navigation={navigation} />

                {/* category section */}
                <CategoryList  categoryList={categoryList} navigation={navigation} />

                {/* photos section */}
                <RecentUploads />
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    headerText: {
        fontSize: normalize(30),
        marginVertical: normalize(20),
        fontWeight: 'bold',
        color: '#38486E',
    },
    
})