import React from 'react';
import { TextInput, View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity,} from 'react-native'
import normalize from '../../constants/normalize';


export default function Message({navigation}) {
    return (
        <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
             <ImageBackground 
                 source={require('../Images/settingupperpic.jpg')}
                 style={Styles.imagebg2}>
                 <Text style={Styles.textdesign}>Please fill up the form</Text>
             </ImageBackground>
            <View>
                <View style={{width: '90%',backgroundColor:'white', padding:normalize(20),
                         marginTop: normalize(150),marginLeft:normalize(20), borderRadius: 30,  shadowColor: "#000",
                         shadowOffset: {
                         width: 0,
                         height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,}}>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"}
                         placeholder='Enter your name'/>
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"}
                         placeholder='Enter your Email'/>
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"}
                         placeholder='Enter your phone number'/>
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black'}} placeholderTextColor={"black"}
                         placeholder='Enter the event details(category, date, time, etc)'/>
                        </View>
                        
                        <TouchableOpacity>
                        <Text style={Styles.logoutdesign}>Submit</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    )}
    const Styles=StyleSheet.create({
        imagebg2:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*0.25,
            position: 'absolute',
          
        },
        textdesign:{
            color:'white',
            marginTop: 100,
            marginLeft: 80,
            fontWeight: 'bold',
            fontSize: 20
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
