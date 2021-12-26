import React, { useState, useEffect } from 'react';
import {  FlatList,  View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity,} from 'react-native'
import normalize from '../../constants/normalize';
import ProfileButtons from '../Profile/ProfileButtons';
import GuestProfile from '../Profile/GuestProfile';
import { getUserID } from '../../customFunctions/utils';
import { Rating, RatingProps } from 'react-native-elements';

import {userProfileFunctions} from '../../customFunctions/userProfile/userProfileFunctions';  

export default function VisitingProfile({navigation, route}) {
    const { profileInfo } = route.params;
    const [images, setImages] = useState([]);
    const [isRatingVisible, setIsRatingVisible] = useState(false);

    const loadImages = async () => {
        const userId = getUserID();
        const userPhotos = await userProfileFunctions.getImages(profileInfo.uid);
        console.log(userPhotos.photos)
        setImages(userPhotos.photos)
    }

    useEffect(() => {
        loadImages();
    }, [])
    
    
    const renderItem = ({ item }) => {
       return(  <View style={Styles.imgview}><Image source={{uri: item.img}} style={Styles.galleryimg}/></View>
    )};

    return (
        <View  style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <ImageBackground 
                    source={{uri : profileInfo.coverPic}}
                    style={Styles.imagebg2}
                ></ImageBackground>
                <View>
                    <View style={{width: '90%',backgroundColor:'white', padding:normalize(20),
                            marginTop: normalize(170),marginLeft:normalize(20), borderRadius: 30,  shadowColor: "#000",
                            shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,}}>
                        <Image source={{uri : profileInfo.img}}
                            style={Styles.profileimg}>
                        </Image>
                        <View>
                            <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 17}}>{profileInfo.fullName}</Text>
                            <Text style={{color: '#38486e', alignSelf: 'center', fontSize: 13}}>{profileInfo.email}</Text>
                            <Text style={{color: 'black', alignSelf: 'center', fontSize: 13}}>{profileInfo.location}</Text>
                            <Text style={{color: 'black', alignSelf: 'center',fontSize: 13}}>{profileInfo.contact}</Text>    
                        </View>
                                        
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10}}>
                            <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>4.5{"\n"}Rating</Text>
                            <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>{images.length}{"\n"}Total Photos</Text>       
                        </View>   
                        <ProfileButtons role="Guest" isRatingVisible={isRatingVisible} setIsRatingVisible={setIsRatingVisible} />
                    </View>
                    <FlatList 
                        style={{marginHorizontal: '2%'}}
                        data={images}
                        numColumns={3}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View> 
            </ScrollView>
                {
                    isRatingVisible
                    ? <View style={Styles.modalBackground}>
                        <View style={Styles.ModalStyle}> 
                            <Rating 
                                style={Styles.ratedesign} 
                                imageSize={28} 
                                startingValue={0}
                                onFinishRating={(value) => setRatingValue(value)}
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: normalize(20)}}>
                                <TouchableOpacity 
                                    style={{marginRight: normalize(20)}} 
                                    onPress={() => setIsRatingVisible(!isRatingVisible)}
                                >
                                    <Text style={Styles.modalTextStyle}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text  style={Styles.modalTextStyle}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    : null
                }
        </View>
    )

}

const Styles = StyleSheet.create({
    imagebg2:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.25,
        position: 'absolute',
    },
    profileimg:{
        position: 'absolute',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: normalize(100),
        marginTop: normalize(-65),
        borderWidth: 4,
        borderColor: 'white',
    },
    galleryimg:{
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
    imgview:{
        marginTop: 10,
        width: '30%', 
        height: 100,
        margin: '1.75%',
        borderWidth: 2,
        borderRadius: 8,
        padding: 3,
        borderColor: '#38486e'
    },
    ratedesign:{
        paddingVertical: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
    ModalStyle: {
        backgroundColor: 'white',
        padding: normalize(20),
        width: Dimensions.get('window').width*0.8,
        borderRadius: 3,
    },
    modalBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTextStyle: {
        color: 'black', 
        alignSelf: 'center', 
        fontWeight: 'bold', 
        marginTop: 10, 
        fontSize: 17,
    }
})
