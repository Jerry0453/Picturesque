import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import normalize from '../../constants/normalize'
import {userAuthFunctions} from '../../customFunctions/userAuth/userAuthFunctions';
import { newsfeedFunctions } from '../../customFunctions/newsfeedFunctions/newsfeedFunctions';

export default function RecentUploads() {
    const [images, setImages] = useState();
    const recentImages = [
        { id: 1, name: 'Kaniz Fatima Tonni', img: 'https://i.pinimg.com/564x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg' },
        { id: 2, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/564x/4d/b0/f9/4db0f939a4b6ca9bf9dd43f2ba312e5d.jpg' },
        { id: 3, name: 'Kaniz Fatima Tonni', img: 'https://i.pinimg.com/564x/69/dd/e2/69dde2948e7e0e0694463aacb226ac80.jpg' },
        { id: 4, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/564x/c4/b4/ff/c4b4ff2bd59edcb87fdd9f703794108b.jpg' },
        { id: 5, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/564x/76/a6/66/76a6665176297a4e174001c3cd904b90.jpg' },
        { id: 6, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/564x/25/02/0b/25020b0cfa6f65b1223f0ca6d3156e5a.jpg' },
        { id: 7, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/564x/b6/cb/ce/b6cbce2aa3bf06de823e55530983ad88.jpg' },
        { id: 8, name: 'Maliha Zahan CHowdhury', img: 'https://i.pinimg.com/736x/e1/f6/e7/e1f6e7c9aa58e9267b1247f58640c9f5.jpg' },
    ];

    const loadImages = async () => {
        const userPhotos = await newsfeedFunctions.getRecentUploads();
        console.log(userPhotos.Data)
        setImages(userPhotos.Data)
    }

    useEffect(() => {
        loadImages();
    }, [])

    const renderItem = ({item}) => {
        return (
            <View style={[Styles.galleryImgStyle, {marginRight: item.id%3 !== 0 ? '2%' : 0,}]}>
                <ImageBackground source={{uri: item.img}} style={Styles.imgStyle} imageStyle={{borderRadius: 6}} >
                    
                </ImageBackground>  
                <Text style={Styles.NameStyle}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={Styles.topicTextStyle}>Recent Uploads</Text>
            <FlatList
                data={images}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
    galleryImgStyle: {
        width: '32%', 
        //padding: 5,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#38486E',
        marginTop: normalize(15)
    },
    imgStyle: {
        width: '100%',
        height: 180,
    },
    NameStyle: {
        fontSize: normalize(16),
        fontWeight: '600',
        color: '#38486e',
        textAlign: 'center'
    }
})