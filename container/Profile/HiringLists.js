import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import normalize from '../../constants/normalize';
import { hireFunctions } from '../../customFunctions/hireFunctions/hireFunctions';

export default function HiringLists({navigation, route}) {
    const { hireDetailslist, authorisedUserDetails } = route.params;

    const cancelHire = (item) => {
        hireFunctions.cancelHireStatus(item, item.id);
    }
    const confirmHire = (item) => {
        hireFunctions.confirmHireStatus(item, item.id);
    }

    const renderItem = ({ item }) => {
            return(  
                <View style={Styles.categoryview} >
                    <View style={{flex: 0.7, paddingTop: 10}}>
                        <TouchableOpacity onPress={() => navigation.navigate('VisitingProfile', {
                            profileInfo: item,
                        })}>
                        <Text style={Styles.categorytitle}>{item.hirerName}</Text>
                        </TouchableOpacity>
                        <Text style={Styles.categoryinfo}>Email: {item.hirerEmail}</Text>
                        <Text style={Styles.categoryinfo}>Contact: {item.hirerPhone}</Text>
                        <Text style={Styles.categoryinfo}>{item.hireDetails}</Text>
                        <Text style={Styles.categoryinfo}>Status: {item.status}</Text>
                    </View>
                    
                        {
                            item.status === "Pending" 
                            ? <View style={{flexDirection: 'row', justifyContent: 'flex-end', }}>
                                <TouchableOpacity style={{marginRight: normalize(20)}}  onPress={cancelHire(item)}>
                                    <Text style={Styles.modalTextStyle}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight: normalize(20)}}  onPress={confirmHire(item)}>
                                    <Text style={Styles.modalTextStyle}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                        }
                        
                </View>
            )
    };

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 0.1, justifyContent: 'center', marginHorizontal: normalize(20)}}>
                <Text style={Styles.headerText}>Hiring List</Text>
            </View>
            <View>
            <FlatList 
                style={{marginHorizontal: '2%'}}
                style={Styles.flatlistdesign}  
                data={hireDetailslist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
            
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    headerText: {
        fontSize: normalize(25),
        marginVertical: normalize(20),
        fontWeight: 'bold',
        color: '#38486E',
    },
    flatlistdesign:{
        marginHorizontal: '2%',
        padding: 10,
        
       
    },
    categorytitle:{
    fontSize: normalize(15),
    color: '#8891a8',
    fontWeight: 'bold'
},
categoryinfo:{
    fontSize: normalize(13),
    color: '#8891a8',
},
categoryview:{
  width: '95%', 
  //height: 130,
  margin: '1.75%',
  padding: normalize(20),
 
  borderRadius: 8,
  borderColor: '#38486e',
  backgroundColor: 'white',
  
  shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
profileimg:{
    height: 90,
    width: '100%',
    borderRadius: 8,
    padding: 10,
},
modalTextStyle: {
    color: 'black', 
    alignSelf: 'center', 
    fontWeight: 'bold', 
    marginTop: 10, 
    fontSize: 17,
}
    
})