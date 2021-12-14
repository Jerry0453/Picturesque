import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
export default function Demo() {
    return (
        <View style={screendesign.container}>

            <View style={screendesign.HeaderName}>
                <Text style={{fontSize: 30}}>Log in</Text>
            </View>

            <View style={screendesign.mainBody}>

                <View style={screendesign.InputStyle}>
                    <TextInput style={{color: "red"}} placeholder='Enter Email' />
                </View>

                <View style={screendesign.InputStyle}>
                    <TextInput placeholder='Enter Password' />
                </View>   

                <TouchableOpacity>
                    <Text>Log in</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const screendesign = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2B4DE',
    },
    HeaderName: {
        flex: 0.3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainBody: {
        flex: 0.7,
        backgroundColor: '#547869',
        alignItems: 'center',
        padding: 20,
    },
    InputStyle: {
        width: "100%",
        backgroundColor: 'white',
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 5,
    }
})
