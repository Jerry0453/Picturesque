import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import normalize from '../../constants/normalize'

export default function PhotographerList({photographerList}) {

    const renderItem = ({item}) => {
        return(
            <View style={Styles.renderItemStyle}>
                <Image source={item.img} style={Styles.ImgStyle} />
                <Text style={Styles.NameStyle}>{item.name}</Text>
                <Text style={[Styles.NameStyle, {fontSize: normalize(13), fontWeight: '300'}]}>{item.location}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={Styles.topicTextStyle}>Suggested for you</Text>
            <FlatList
                data={photographerList}
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
        marginTop: normalize(20)
    },
    renderItemStyle: {
        marginVertical: normalize(15),
        marginRight: normalize(15),
        borderRadius: 10,
        width: 120,
    },
    ImgStyle: {
        borderRadius: 10,
        height: 140,
        width: 120
    }, 
    NameStyle: {
        fontSize: normalize(16),
        fontWeight: '500',
        color: '#38486E',
    }
})