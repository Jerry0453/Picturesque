import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from '../../constants/normalize';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { hireFunctions } from '../../customFunctions/hireFunctions/hireFunctions';

export default function ProfileButtons({role, VisitingProfileInfo, navigation, authorisedUserDetails, isRatingVisible, setIsRatingVisible}) {
    const [img, setImg] = useState(null);
    const [ratingValue, setRatingValue] = useState(0);
    const [hireDetailslist, setHireDetailslist] = useState([]);

    const loadHiringDetails = async () => {
        const hireInfo = await hireFunctions.getHireInfo(authorisedUserDetails.uid);
        setHireDetailslist(hireInfo.data);
        console.log(hireDetailslist);
    }

    useEffect(() => {
        loadHiringDetails();
    }, []);

    const chooseFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(async image => {
            //setImg(image.path)
            let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
            try {
                await storage()
                        .ref('Images')
                        .child(imageName)
                        .putFile(image.path)
                        .then((res) => {
                            storage()
                            .ref('Images')
                            .child(imageName)
                            .getDownloadURL()
                            .then((imgUrl) => {
                                console.log('1')
                                firestore()
                                .collection('Photos')
                                .doc()
                                .set({
                                    img: imgUrl,
                                    uid: authorisedUserDetails.uid, 
                                });
                            })
                        })
            } catch(error) {
                console.log(error)
            }
        });
    }

    if(role === 'Photographer'){
        return(
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                <TouchableOpacity onPress={chooseFile}>
                <AntDesign name="upload" size={35} color="#38486e" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HiringLists', {
                    hireDetailslist: hireDetailslist,
                    authorisedUserDetails: authorisedUserDetails,
                })}>
                    {
                        hireDetailslist.length > 0
                        ? <View style={{height: 15, width: 15, borderRadius: 50, backgroundColor: 'black', position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white'}}>{hireDetailslist.length}</Text>
                        </View>
                        : null
                    }
                    <Ionicons name="notifications-outline" size={35} color="#38486e" />
                </TouchableOpacity> 
                
                <TouchableOpacity onPress={() => navigation.navigate('Settings', {
                    authorisedUserDetails: authorisedUserDetails,
                })}>
                <AntDesign name="setting" size={35} color="#38486e" />
                </TouchableOpacity>
            </View>
        )
    } else if(role === "Guest" ) {
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Message', {
                        VisitingProfileInfo: VisitingProfileInfo,
                    })}>
                        <AntDesign name="message1" size={35} color="#38486e" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsRatingVisible(!isRatingVisible)}>
                        <AntDesign name="star" size={35} color="#38486e"/>
                    </TouchableOpacity>
                </View>  
            </View>
        )
    } 
}
const Styles = StyleSheet.create({
  
    
})
