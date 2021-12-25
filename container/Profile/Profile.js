import React, { useState, useEffect } from 'react';
import {  FlatList,  View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image,} from 'react-native'
import normalize from '../../constants/normalize';
import ProfileButtons from './ProfileButtons';
import GuestProfile from './GuestProfile';
import { getUserID } from '../../customFunctions/utils';
import {userAuthFunctions} from '../../customFunctions/userAuth/userAuthFunctions';
import {userProfileFunctions} from '../../customFunctions/userProfile/userProfileFunctions';

// const images = [
//     {id : 1, img:require('../Images/bg1.jpg')},
//     {id : 2, img:require('../Images/bg2.jpg')},
//     {id : 3, img:require('../Images/bg3.jpg')},
//     {id : 4, img:require('../Images/bg1.jpg')},
//     {id : 5, img:require('../Images/bg1.jpg')},
//     {id : 6, img:require('../Images/bg1.jpg')},
//     {id : 7, img:require('../Images/bg2.jpg')},
//     {id : 8, img:require('../Images/bg3.jpg')},
//     {id : 9, img:require('../Images/bg1.jpg')},
//     {id : 10, img:require('../Images/bg1.jpg')}
//   ];

  

<<<<<<< HEAD
export default function Profile({navigation, route}) {
    const role = "Guest";
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState();
    const [isVisiting, setIsVisiting] = useState(false);
    const [images, setImages] = useState();

    const loadUserInfo = async () => {
        const userId = getUserID();
        const userInfo = await userAuthFunctions.getUserInfo(userId);
        setAuthorisedUserDetails({...userInfo.userData, uid: userId});
        console.log(authorisedUserDetails)
    }

    const loadImages = async () => {
        const userId = getUserID();
        const userPhotos = await userProfileFunctions.getImages(userId);
        console.log(userPhotos.photos)
        setImages(userPhotos.photos)
    }

    useEffect(() => {
        loadUserInfo();
    }, [])

    useEffect(() => {
        loadImages();
    }, [])
    

=======
export default function Profile({navigation}) {
    const role = "Photographer";
>>>>>>> a8d435e4a9e4ef6432807bd8a7ad371fb0207983
    const renderItem = ({ item }) => {
       return(  <View style={Styles.imgview}><Image source={{uri: item.img}} style={Styles.galleryimg}/></View>
    )};

    if(!authorisedUserDetails) {
        return(
            <View>
                <Text>Create your own profile</Text>
            </View>
        )
    }

    if(authorisedUserDetails.role === "Photographer"){
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    <ImageBackground 
                        source={require('../Images/upperimage.jpg')}
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
                            <Image source={{uri : authorisedUserDetails.img}}
                                style={Styles.profileimg}>
                            </Image>
                            <View>
                                <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 17}}>{authorisedUserDetails.fullName}</Text>
                                <Text style={{color: '#38486e', alignSelf: 'center', fontSize: 13}}>{authorisedUserDetails.email}</Text>
                                <Text style={{color: 'black', alignSelf: 'center', fontSize: 13}}> Address: Sufia Kamal Hall</Text>
                                <Text style={{color: 'black', alignSelf: 'center',fontSize: 13}}> Contact : 01794734875</Text>    
                            </View>
                                        
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10}}>
                                <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>4.5{"\n"}Rating</Text>
                                <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>10{"\n"}Total Photos</Text>       
                            </View>   
<<<<<<< HEAD
                            <ProfileButtons role="Photographer" authorisedUserDetails={authorisedUserDetails} />
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
            </View>
        )
    } else {
        return(
            <GuestProfile />
        )
    }
=======
                            <ProfileButtons role={role} navigation= {navigation}/>
                    </View>
                    <FlatList style={{marginHorizontal: '2%'}}
                    data={images}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                    </View>
                    
                    
        </View>
       </ScrollView>
            
    )
            }
            else {
                return(
                    <GuestProfile role={role}/>
                )}
>>>>>>> a8d435e4a9e4ef6432807bd8a7ad371fb0207983
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
  }
  
})
