import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TextInput, ScrollView, ScrollViewBase } from 'react-native';

import normalize from '../../constants/normalize';


export default function PrivacyPolicy() {
    return (
        <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground 
            source={require('../Images/settingupperpic.jpg')}
            style={Styles.imagebg2}>
            
        </ImageBackground>
        
       <View>
           <View style={{width: '90%',backgroundColor:'white', padding:normalize(20),
                    marginTop: normalize(120),marginLeft:normalize(20), borderRadius: 30,  shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,}}>
               
                <Text style={Styles.textdesign}>
                <Text style={{fontWeight: 'bold',  fontSize: 30, color: '#38486e',
                 padding:10, marginLeft: 20, marginBottom: 10 }}>Privacy Policy</Text>{"\n"}Picturesque respects and protects users’ personal privacy.
                Please put more emphasis on the terms in this policy, which have a significant relationship 
                with your rights and interests (possibly). Before using or continuing to use our products and 
                services, please read carefully and fully understand this policy.
                {"\n"} {"\n"}
                <Text style={{fontWeight:'bold'}}>To give you an overview, this Privacy Policy is structured as follows:{"\n"}
                 
                 1. How We Collect and Use Your Personal Information{"\n"}
                 
                 2. Why We Collect Your Personal Information{"\n"}
                 
                 3. How We Share, Transfer, and Publicly Disclose Your Personal Information{"\n"}
                 
                 4. Your Rights{"\n"}
                 
                 5. How We Store and Protect Your Personal Information{"\n"}
                 
                 6. Children Under 13{"\n"}
                 
                 7. Contact Us{"\n"}{"\n"}

                </Text>
                
                 <Text style={{fontWeight:'bold'}}>
                 1. How We Collect and Use Your Personal Information{"\n"}
                 

                 1）Storage permission:
                 </Text>
                 When you use the video/photo editing or collage feature, 
                we need permission to access your local media to select videos or images.
                We will not obtain any video or photos from your device, nor will we modify or 
                delete the content in your local media storage.{"\n"}{"\n"}
                
                <Text style={{fontWeight:'bold'}}>
                 2. Why We Collect Your Personal Information?{"\n"}
                </Text>
                 
                 ● In response to your request.{"\n"}
                 
                 ● In order to communicate with you.{"\n"}
                 
                 ● In order to improve our service.{"\n"}
                 
                 ● Other purposes related to our business.{"\n"}
                 
                 ● To comply with laws and regulations.{"\n"}{"\n"}
                
                 <Text style={{fontWeight:'bold'}}>
                 3. How We Share, Transfer, and Publicly Disclose Your Personal Information {"\n"}
                 </Text>
                 
                 We will only share your personal information for legal, legitimate, necessary, 
                 specific and clear purposes. At the same time, we require third parties to deal 
                 with shared information with confidentiality and security measures no less than those 
                 required by this policy.{"\n"}{"\n"}
                
                 <Text style={{fontWeight:'bold'}}>
                 4. Your Rights{"\n"}
                 </Text>
                Under applicable laws of your jurisdiction, you may have one or more of the rights
                to your personal information. These rights may include (if relevant): {"\n"}
                 
                ● Provide you with information we collect about you. {"\n"}
                ● Delete.{"\n"}{"\n"}
               
                <Text style={{fontWeight:'bold'}}>
                5. Children under 13{"\n"}</Text>
                If you are a child user under the age of 13 (or the prescribed age in your country/region),
                please read this policy carefully with the assistance and assistance of your parents or
                guardians before using our products and services, and use our services or provide us with
                information with the consent of your parents or guardians.{"\n"}
               
                 
                 
                </Text>
                    
                </View>
                </View>
                </View>
                </ScrollView>
               
      
        )
    }
    const Styles = StyleSheet.create({
        imagebg2:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*0.25,
            position: 'absolute',
            top: 0,
        },
       
        textdesign:{
            color: 'black',
            textAlign: 'justify',
            padding: 20,
            margin: 10
            
        },
        titledesign:{
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 10
        }
       
    })
    