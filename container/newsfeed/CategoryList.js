import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import normalize from '../../constants/normalize'

export default function CategoryList({categoryList, navigation}) {

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity style={{width: 80, marginRight: normalize(15)}} onPress={() => navigation.navigate('Category')}>
                <View style={Styles.renderItemStyle}>
                    <Image source={{uri: item.img}} style={Styles.ImgStyle} />
                </View>
                <Text style={Styles.NameStyle}>{item.name}</Text>
                <Text style={[Styles.NameStyle, {fontSize: normalize(13), fontWeight: '300'}]}>{item.location}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={Styles.topicTextStyle}>Top Categories</Text>
            <FlatList
                data={categoryList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    topicTextStyle: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: '#38486E',
        marginTop: normalize(10)
    },
    renderItemStyle: {
        marginTop: normalize(15),
        marginRight: normalize(15),
        borderRadius: 10,
        width: 80,
        height: 80,
        backgroundColor: '#8891a8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImgStyle: {
        borderRadius: 10,
        height: 60,
        width: 60
    }, 
    NameStyle: {
        fontSize: normalize(16),
        fontWeight: '600',
        color: '#38486e',
        textAlign: 'center'
    }
})