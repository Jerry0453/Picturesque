import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function ProfileButtons({role}) {
    if(role==="Photographer"){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return(
            <View style={{flex:1}}>

            <TouchableOpacity>
            <Text>Upload</Text>
            </TouchableOpacity>

            
            </View>
        )

    }
}
