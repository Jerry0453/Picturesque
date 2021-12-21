import React from "react";
import { View,Text, StyleSheet, ImageBackground, Dimensions, TextInput,TouchableOpacity, Alert } from "react-native";
import normalize from '../../constants/normalize'

function ResetPassword(){
    return(
        <View>
        <ImageBackground 
            source={require('../Images/cropedbg2.jpg')}
            style={Styles.imagebg}></ImageBackground>
                <View style={{height:'100%', width:'100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: normalize(25), justifyContent:'center'}}>
                    <View style={{backgroundColor:'white', padding:normalize(20), marginTop: normalize(30)}}>
                    <Text style={Styles.resetdesign}>Reset Password</Text>   
                    <Text style={Styles.textdesign}> Enter the mail address you used to create our account to reset your password</Text>
                        <View style={Styles.inputdesign}>
                            <TextInput>Enter your Email</TextInput>
                        </View>
                        <View>
                        <TouchableOpacity style={Styles.buttondesign} onPress={()=>Alert.alert('Check your main to reset your password')}>
                            <Text>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
    </View>
    )
}
const Styles = StyleSheet.create({
    
    textdesign :{
        textAlign:'center',
        alignSelf:'flex-start',
        color:'#38486e',
        fontSize: normalize(13),
        fontWeight: '300',
    },
    imagebg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.45,
        position: 'absolute',
    },
    inputdesign:{
        backgroundColor: '#8891a8',
        width: '100%',
        marginTop: normalize(30),
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    buttondesign:{
        width: '100%',
        alignItems: "center",
        backgroundColor: '#38486e',
        padding: normalize(10),
        borderRadius: 10,
        marginTop: normalize(20),  
    },
    resetdesign:{
        alignSelf:'flex-start',
        color:'#38486e',
        fontSize: normalize(25),
        fontWeight: 'bold',
        marginBottom: 15,
    }

})
export default ResetPassword;