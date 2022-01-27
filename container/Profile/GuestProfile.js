import React, {useState, useEffect} from 'react';
import {   View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions,  ScrollView, Image,} from 'react-native'
import normalize from '../../constants/normalize';
import ProfileButtons from './ProfileButtons';
import { getUserID } from '../../customFunctions/utils';
import {userAuthFunctions} from '../../customFunctions/userAuth/userAuthFunctions';
import auth from '@react-native-firebase/auth'
import { hireFunctions } from '../../customFunctions/hireFunctions/hireFunctions';

export default function GuestProfile({navigation}){
    const role = "Guest";
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState();
    const [isVisiting, setIsVisiting] = useState(false);
    const [hireDetailslist, setHireDetailslist] = useState([]);

    const loadUserInfo = async () => {
        const userId = getUserID();
        const userInfo = await userAuthFunctions.getUserInfo(userId);
        setAuthorisedUserDetails(userInfo.userData);
        console.log(authorisedUserDetails)
    }

    const loadHiringDetails = async () => {
        const hireInfo = await hireFunctions.getHireInfo(authorisedUserDetails.uid);
        setHireDetailslist(hireInfo.data);
        console.log(hireDetails)
    }

    useEffect(() => {
        loadHiringDetails();
    }, []);

    useEffect(() => {
        loadUserInfo();
    }, [])

    if(!authorisedUserDetails) {
        return(
            <View>
                <Text>Create your profile</Text>
                <TouchableOpacity>
                    <Text>Login or Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }

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
        <View style={{flex: 1, backgroundColor: 'white'}}>
         <ScrollView>
         <ImageBackground 
             
             source={require('../Images/upperimage.jpg')}
             style={Styles.imagebg2}>
         </ImageBackground>
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
                     <Image source={require('../Images/Profile.jpg')}
                        style={Styles.profileimg}></Image>
                         <View>
                             <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 17}}>{authorisedUserDetails.fullName}</Text>
                             <Text style={{color: '#38486e', alignSelf: 'center', fontSize: 13}}>{authorisedUserDetails.email}</Text>
                             <Text style={{color: 'black', alignSelf: 'center', fontSize: 13}}>{authorisedUserDetails.location}</Text>
                             <Text style={{color: 'black', alignSelf: 'center',fontSize: 13}}>{authorisedUserDetails.contact}</Text>
                         
                             </View>
                     </View>

                    <View style={{paddingHorizontal: normalize(20), marginTop: 20}}>
                        <TouchableOpacity style={Styles.buttondesign} onPress={() => navigation.navigate('HiringLists', {
                            hireDetailslist: hireDetailslist,
                            authorisedUserDetails: authorisedUserDetails,
                        })}>
                            <Text style={{color: 'white', fontSize: normalize(15)}}>Check hiring details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.buttondesign} onPress={onSignOut}>
                            <Text style={{color: 'white', fontSize: normalize(15)}}>logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                     
                     
         </ScrollView>
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
    buttondesign:{
        width: '100%',
        alignItems: "center",
        backgroundColor: '#38486e',
        padding: normalize(10),
        borderRadius: 10,
        marginTop: normalize(10),
    },
 
  
})
