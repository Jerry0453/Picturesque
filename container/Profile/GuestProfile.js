import React, {useState, useEffect} from 'react';
import {   View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image,} from 'react-native'
import normalize from '../../constants/normalize';
import ProfileButtons from './ProfileButtons';
import { getUserID } from '../../customFunctions/utils';
import {userAuthFunctions} from '../../customFunctions/userAuth/userAuthFunctions';

export default function GuestProfile(){
    const role = "Guest";
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState();
    const [isVisiting, setIsVisiting] = useState(false);

    const loadUserInfo = async () => {
        const userId = getUserID();
        const userInfo = await userAuthFunctions.getUserInfo(userId);
        setAuthorisedUserDetails(userInfo.userData);
        console.log(authorisedUserDetails)
    }

    useEffect(() => {
        loadUserInfo();
    }, [])

    if(!authorisedUserDetails) {
        return(
            <View>
                <Text>Create your own profile</Text>
            </View>
        )
    }

    return (
        <ScrollView>
         <View style={{flex: 1, backgroundColor: 'white'}}>
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
                             <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 17}}> Maliha Zahan Chowdhury</Text>
                             <Text style={{color: '#38486e', alignSelf: 'center', fontSize: 13}}> u1604046@student.cuet.ac.bd</Text>
                             <Text style={{color: 'black', alignSelf: 'center', fontSize: 13}}> Address: Sufia Kamal Hall</Text>
                             <Text style={{color: 'black', alignSelf: 'center',fontSize: 13}}> Contact : 01794734875</Text>
                         
                             </View>
                             
                             <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10}}>
     
                                     <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>4.5{"\n"}Rating</Text>
                                     <Text style={{fontWeight:'bold', fontSize: 15, textAlign: 'center', color: 'black'}}>10{"\n"}Total Photos</Text>
                          
                             </View>   
                     </View>
                
                     </View>
                     
                     
         </View>
        </ScrollView>
             
     )
}



const images = [
    {id : 1, img:require('../Images/bg1.jpg')},
    {id : 2, img:require('../Images/bg2.jpg')},
    {id : 3, img:require('../Images/bg3.jpg')},
    {id : 4, img:require('../Images/bg1.jpg')},
    {id : 5, img:require('../Images/bg1.jpg')},
    {id : 6, img:require('../Images/bg1.jpg')},
    {id : 7, img:require('../Images/bg2.jpg')},
    {id : 8, img:require('../Images/bg3.jpg')},
    {id : 9, img:require('../Images/bg1.jpg')},
    {id : 10, img:require('../Images/bg1.jpg')}
  ];

  
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
  
 
  
})
