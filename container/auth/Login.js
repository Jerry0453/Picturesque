import React, {useState} from 'react'
import {View, Text, ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native'
import normalize from '../../constants/normalize'
import auth from '@react-native-firebase/auth'
import { userAuthFunctions } from '../../customFunctions/userAuth/userAuthFunctions'

const ratio = Dimensions.get('window');

export default function Login({navigation}) {
    const [currentUser, setCurrentUser] = useState({
        email: '',
        password: '',
    });

    const onLogIn = async () => {
        if(!currentUser.email) {
            return console.log('Select email');
        }
        if(!currentUser.password) {
            return console.log('Select pass');
        }
        try {
            const user = await userAuthFunctions.logInWithEmail(currentUser.email, currentUser.password);
            navigation.navigate('Home')
        } catch(error) {
            console.log(error);
        }
    } 
    
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ImageBackground 
                source={require('../Images/cropedbg2.jpg')}
                style={Styles.imagebg}>
            </ImageBackground>
            <View style={Styles.whiteBack}>
                <Image style={{width: '100%', height: '7%', resizeMode: 'contain', marginBottom: normalize(20)}} source={require('../Images/Web_Photo_Editor.jpg')} />
            </View>

            <View style={{height:'100%', width:'100%',  padding: normalize(25), justifyContent:'center'}}>
                <View style={Styles.loginContainer}>
                    <Text style={Styles.logindesign}>Log In</Text>
                    <View style={Styles.inputdesign}>
                        <TextInput onChangeText={(value) => setCurrentUser({...currentUser, email: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Email'/>
                     </View>
                     <View style={Styles.inputdesign}>
                        <TextInput onChangeText={(value) => setCurrentUser({...currentUser, password: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Password'/>
                    </View>
                    <View>
                        <TouchableOpacity style={Styles.buttondesign} onPress={onLogIn}>
                            <Text style={{color: 'white', fontSize: normalize(15)}}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                            <Text style={Styles.textStyle}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.newaccount}>
                        <Text style={Styles.textStyle}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={Styles.signupdesign}>Sign Up</Text>
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
        borderRadius: 10, 
        backgroundColor:'white', 
        padding:normalize(20), 
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
