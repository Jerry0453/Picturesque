import React from 'react';
import { TextInput, View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity,} from 'react-native'
import normalize from '../../constants/normalize';


export default function UpdateProfile({navigation}) {
    return (
        <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
             <ImageBackground 
                 source={require('../Images/settingupperpic.jpg')}
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
                         <Text style={Styles.namedesign}>Change profile photo</Text>
                         <Text style={Styles.namedesign}>Change Cover photo</Text>
                         
                         <View style={Styles.inputdesign}>
                         <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Name</Text>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Change your Name'/>
                        </View>
                        
                        <View style={Styles.inputdesign}>
                        <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Username</Text>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Change your Username'/>
                        </View>
                        
                        <View style={Styles.inputdesign}>
                        <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Email</Text>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Change your Email'/>
                        </View>
                        
                        <View style={Styles.inputdesign}>
                        <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Contact No.</Text>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Change your Contact No.'/>
                        </View>

                        <View style={Styles.inputdesign}>
                        <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Current Password</Text>
                       <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Enter your current password'/>
                       </View>

                       <View style={Styles.inputdesign}>
                        <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>New Password</Text>
                       <TextInput style={{color: 'black', }} placeholderTextColor={"black"} placeholder='Enter your new password'/>
                       </View>

                        <TouchableOpacity>
                        <Text style={Styles.logoutdesign}>Logout</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
const Styles=StyleSheet.create({
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
        marginTop: normalize(-75),
        marginLeft: normalize(100),
        borderWidth: 4,
        borderColor: 'white',
    },
    namedesign:{
        color: '#38486e',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputdesign:{
       
        width: '100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    logoutdesign:{
        marginTop: 20,
        color: 'white',
        padding: 10,
        backgroundColor: '#38486e',
        borderRadius: 10,
        textAlign: 'center',

    }
})
