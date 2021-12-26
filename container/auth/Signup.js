import React, {useState, useEffect} from 'react'
import {View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import { TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import normalize from '../../constants/normalize'
import auth from '@react-native-firebase/auth'
import { userAuthFunctions } from '../../customFunctions/userAuth/userAuthFunctions'

export default function Login({navigation}) {
    const roles = ["Guest", "Photographer"];
    const [newUser, setNewUser] = useState({
        img: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        coverPic: 'https://firebasestorage.googleapis.com/v0/b/picturesque-c7f33.appspot.com/o/Images%2F269741416_235891381995569_1051344916841076276_n.jpg?alt=media&token=057418f8-2ecb-4204-bb61-43152897e094',
        fullName: '',
        userName: '',
        email: '',
        password: '',
        role: '',
        contact: '',
        location: '',
        categories: [],
        rating: 0,
        sumOfRating: 0,
        totalRating: 0,
    });

    const [user, setUser] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(user) {
            userAuthFunctions.storeUserInfo(newUser, user.uid);
            navigation.navigate('Home');
        }
    }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; 
    // }, []);

    const onSignUp = () => {
        if(!newUser.role) {
            return console.log('Select Role');
        }
        if(!newUser.fullName) {
            return console.log('Select fullname');
        }
        if(!newUser.userName) {
            return console.log('Select username');
        }
        if(!newUser.email) {
            return console.log('Select email');
        }
        if(!newUser.password) {
            return console.log('Select pass');
        }
        try {
            userAuthFunctions.signUpWithEmail(newUser.email, newUser.password); 
            auth().onAuthStateChanged(onAuthStateChanged);
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
            <View style={Styles.whiteBack}/>

            <View style={{height:'100%', width:'100%',  paddingHorizontal: normalize(25), justifyContent: 'flex-end'}}>
                <View style={Styles.loginContainer}>
                    
                    <Text style={Styles.logindesign}>Sign Up</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <SelectDropdown
                            data={roles}
                            onSelect={(selectedItem, index) => {
                                setNewUser({...newUser, role: selectedItem})
                            }}
                            buttonStyle={Styles.inputdesign}
                                buttonTextStyle={{color: 'white', fontSize: 13, marginLeft: 5,}}
                        />
                        <View style={Styles.inputdesign}>
                            <TextInput onChangeText={(value) => setNewUser({...newUser, fullName: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your FullName'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput onChangeText={(value) => setNewUser({...newUser, userName: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Username'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput onChangeText={(value) => setNewUser({...newUser, email: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your email'/>
                        </View>
                        <View style={Styles.inputdesign}>
                            <TextInput onChangeText={(value) => setNewUser({...newUser, password: value})} style={{color: 'white'}} placeholderTextColor={"white"} placeholder='Enter your Password'/>
                        </View>
                     </ScrollView>
                    <View>
                        <TouchableOpacity style={Styles.buttondesign} onPress={onSignUp}>
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
