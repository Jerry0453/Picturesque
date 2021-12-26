import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity,} from 'react-native'
import normalize from '../../constants/normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Settings({navigation, route}) {
    const { authorisedUserDetails } = route.params;
    return (
  
        <View style={{flex: 1, backgroundColor: 'white'}}>
             <ImageBackground 
                 source={require('../Images/settingupperpic.jpg')}
                 style={Styles.imagebg2}>
                 <Text style={Styles.titledesign}> Settings</Text>
                 <Text style={Styles.namedesign}>{authorisedUserDetails.fullName}</Text>
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
                         <Image source={{uri: authorisedUserDetails.img}}
                         style={Styles.profileimg}></Image>

                      
                         <TouchableOpacity style={Styles.settingsmenu} onPress={() => navigation.navigate('UpdateProfile', {
                             authorisedUserDetails: authorisedUserDetails,
                         })}>
                         <Text style={{color:'black', fontSize: 16}}>Update Profile</Text>
                         <AntDesign name="right" size={20} color="#38486e" style={{marginLeft: 165}}/>
                         </TouchableOpacity>

                         <TouchableOpacity style={Styles.settingsmenu} onPress={() => navigation.navigate('PrivacyPolicy')}>
                         <Text style={{color:'black', fontSize: 16}}>Privacy Policy</Text>
                         <AntDesign name="right" size={20} color="#38486e" style={{marginLeft: 165}}/>
                         </TouchableOpacity>

                         <TouchableOpacity  style={Styles.settingsmenu} onPress={() => navigation.navigate('About')}>
                         <Text style={{color:'black', fontSize: 16}}>About</Text>
                         <AntDesign name="right" size={20} color="#38486e" style={{marginLeft: 220}}/>
                         </TouchableOpacity>
                       

                </View>
            </View>
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
        height: 60,
        width: 60,
        borderRadius: 50,
        marginTop: normalize(-85),
        borderWidth: 4,
        borderColor: 'white',
    },
    titledesign:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 10
    },
    namedesign:{
        color: 'white',
        fontWeight: 'bold',
        marginTop: 46,
        marginLeft: 90
    },
    settingsmenu: {
        flexDirection:'row',
        margin: 10,
    }
  

})
