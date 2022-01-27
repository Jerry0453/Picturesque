import React, {useState, useEffect} from 'react';
import { TextInput, View, Alert, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity,} from 'react-native'
import normalize from '../../constants/normalize';
import { hireFunctions } from '../../customFunctions/hireFunctions/hireFunctions';
import { getUserID } from '../../customFunctions/utils';
import {userAuthFunctions} from '../../customFunctions/userAuth/userAuthFunctions';
import {userProfileFunctions} from '../../customFunctions/userProfile/userProfileFunctions';

export default function Message({navigation, route}) {
    const {VisitingProfileInfo} = route.params;
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState([]);
    const [hiringDetails, setHiringDetails] = useState({
        hirerName: '',
        hirerEmail: '',
        hirerPhone: '',
        hireDetails: '',
        status: 'Pending',
    })

    const loadUserInfo = async () => {
        const userId = getUserID();
        const userInfo = await userAuthFunctions.getUserInfo(userId);
        setAuthorisedUserDetails(userInfo.userData);
        console.log(authorisedUserDetails)
    }

    useEffect(() => {
        loadUserInfo();
    }, [])

    const onSubmit = async () => {
        if(!hiringDetails.hirerName){
            return (
                Alert.alert("Enter your name!")
            )
        }
        if(!hiringDetails.hirerEmail){
            return (
                Alert.alert("Enter your email!")
            )
        }
        if(!hiringDetails.hirerPhone){
            return (
                Alert.alert("Enter your phone!")
            )
        }
        if(!hiringDetails.hireDetails){
            return (
                Alert.alert("Enter details!")
            )
        }
        try {
            if(authorisedUserDetails.role === 'Guest') {
                await hireFunctions.addHireInfo(hiringDetails, authorisedUserDetails.uid,  VisitingProfileInfo.uid);
                navigation.goBack();
            } else{
                return (
                    Alert.alert("You need to be a Hirer.")
                )
            }
        } catch(error){
            console.log(error)
        }

    }

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
                         placeholder='Enter your name'
                         onChangeText={(value) => setHiringDetails({...hiringDetails, hirerName: value})} />
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"}
                         placeholder='Enter your Email'
                         onChangeText={(value) => setHiringDetails({...hiringDetails, hirerEmail: value})} />
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black', }} placeholderTextColor={"black"}
                         placeholder='Enter your phone number'
                         onChangeText={(value) => setHiringDetails({...hiringDetails, hirerPhone: value})} />
                        </View>

                        <View style={Styles.inputdesign}>
                        <TextInput style={{color: 'black'}} placeholderTextColor={"black"}
                         placeholder='Enter the event details(category, date, time, etc)'
                         onChangeText={(value) => setHiringDetails({...hiringDetails, hireDetails: value})} />
                        </View>
                        
                        <TouchableOpacity onPress={onSubmit}>
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
