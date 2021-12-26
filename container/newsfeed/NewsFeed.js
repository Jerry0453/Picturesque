import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Searchbar } from 'react-native-paper'
import normalize from '../../constants/normalize'
import PhotographerList from './PhotographerList'
import CategoryList from './CategoryList'
import RecentUploads from './RecentUploads'
import { newsfeedFunctions } from '../../customFunctions/newsfeedFunctions/newsfeedFunctions';

export default function NewsFeed({navigation}) {
    const [photographerLists, setPhotographerList] = useState([]);

    const loadUserProfiles = async () => {
        const photographerList = await newsfeedFunctions.getPhotographerList();
        console.log(photographerList.Data)
        setPhotographerList(photographerList.Data)
    }

    useEffect(() => {
        loadUserProfiles();
    }, [])

    
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 0.1, justifyContent: 'center', marginHorizontal: normalize(20)}}>
                <Text style={Styles.headerText}>Picturesque</Text>
            </View>
            <View style={{flex: 0.9, paddingHorizontal: normalize(20)}}>
                <Searchbar style={{height: 50, width: '100%'}} placeholder='Search your choices...' />

                {/* Photographer section */}
                <PhotographerList photographerList={photographerLists} navigation={navigation} />

                {/* category section */}
                <CategoryList navigation={navigation} />

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