import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TextInput } from 'react-native';

import normalize from '../../constants/normalize';


export default function About() {
    return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ImageBackground 
                    source={require('../Images/cropedbg2.jpg')}
                    style={Styles.imagebg}>
                </ImageBackground>
                <View style={Styles.whiteBack}>
               
                <Text style={Styles.textdesign}>
                <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 30, color: '#38486e',
                 padding:10 }}>About</Text>{"\n"}People nowadays wish to capture every event of their lives and cherish
                 them for a long time and they hire photographers to record these events.
                With the expansion of the advertising, media, and fashion industries,
                photography has emerged as a lucrative and exciting professional option
                for young people. 'Picturesque' gives a platform for novice photographers to
                create profiles, where others can view their work and hire them. It has the 
                potential to become a platform for young entrepreneurs. 
                </Text>
                    <Image style={{width: '100%', height: '7%', resizeMode: 'contain', marginBottom: normalize(20)}} 
                    source={require('../Images/Web_Photo_Editor.jpg')} />
                   
                </View>
    
              
                </View>
      
        )
    }
    const Styles = StyleSheet.create({
        imagebg:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*0.6,
            position: 'absolute',
            top: 0,
        },
        whiteBack: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*0.7,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            
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
    