import React from 'react'
import {View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import { TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import normalize from '../../constants/normalize'


export default function Login({navigation}) {
    const roles = ["Guest", "Photographer"];
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ImageBackground 
                source={require('../Images/cropedbg2.jpg')}
                style={Styles.imagebg}>
            </ImageBackground>
            <View style={Styles.whiteBack}/>

            <View style={{height:'100%', width:'100%',  paddingHorizontal: normalize(25), justifyContent: 'flex-end'}}>
                <View style={Styles.loginContainer}>
                    
                    <Text style={Styles.logindesign}>Sign Up</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <SelectDropdown
                            data={roles}
                            onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            }}
                            buttonStyle={Styles.inputdesign}
                                buttonTextStyle={{color: 'white', fontSize: 13, marginLeft: 5,}}
                        />
                        <View style={Styles.inputdesign}>
                            <TextInput style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your FullName'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Username'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your email'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Password'/>
                        </View>
                     </ScrollView>
                    <View>
                        <TouchableOpacity style={Styles.buttondesign}>
                            <Text style={{color: 'white', fontSize: normalize(15)}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.newaccount}>
                        <Text style={Styles.textStyle}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={Styles.signupdesign}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        height: Dimensions.get('window').height*0.6,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    loginContainer: {
        height: '70%',
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        backgroundColor:'white', 
        paddingHorizontal:normalize(20), 
        marginTop: normalize(30),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputdesign:{
        backgroundColor: '#8891a8',
        width: '100%',
        marginBottom: normalize(20),
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    logindesign:{
        alignSelf:'flex-start',
        color:'#38486e',
        fontSize: normalize(28),
        fontWeight: 'bold',
        marginBottom: normalize(30),
    },
    buttondesign:{
        width: '100%',
        alignItems: "center",
        backgroundColor: '#38486e',
        padding: normalize(10),
        borderRadius: 10,
    },
    newaccount:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
        marginTop: normalize(14),
        fontSize: normalize(13),
        textAlign: 'center',
    },
    signupdesign:{
        color: '#38486E',
        marginTop: normalize(14),
        fontWeight: 'bold',
        fontSize: normalize(13),
        textAlign: 'center',
        marginLeft: normalize(10),
    }
})
