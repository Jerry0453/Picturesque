import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { categoryFunctions } from "../../customFunctions/category/categoryFunctions";
import normalize from '../../constants/normalize';

export default function ProfileList({navigation, route}){
    const { categoryId } = route.params;
    const [profileLists, setProfileLists] = useState([]);

    const loadProfiles = async () => {
        const profiles = await categoryFunctions.getProfileListByCategory(categoryId);
        setProfileLists(profiles.Data);
        console.log(profileLists)
    }

    useEffect(() => {
        loadProfiles();
    }, [])

    const renderItem = ({ item }) => {
        return(  
            <View style={Styles.categoryview} >
                <View style={{flex: 0.3, alignItems:'center', justifyContent:'center', marginRight: 10}}>
                    <Image source={{uri: item.img}} style={Styles.profileimg}/>
                </View>
                <View style={{flex: 0.7, paddingTop: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('VisitingProfile', {
                        profileInfo: item,
                    })}>
                    <Text style={Styles.categorytitle}>{item.fullName}</Text>
                    </TouchableOpacity>
                    <Text style={Styles.categoryinfo}>Email: {item.email}</Text>
                    <Text style={Styles.categoryinfo}>Contact: {item.contact}</Text>
                    <Text style={Styles.categoryinfo}>Address: {item.location}</Text>
                </View>
            </View>
     )};
        return(
            <View style={{flex: 1, backgroundColor: 'white',}}>
                <ScrollView>
                    <View style={{flex: 0.1, justifyContent: 'center', marginHorizontal: normalize(20)}}>
                        <Text style={{fontSize: normalize(30), marginVertical: normalize(20), fontWeight: 'bold', color: '#38486E',}}>Profile List</Text>
                    </View>
                    <View style={{flex: 0.9}}>
                        <FlatList 
                            style={Styles.flatlistdesign}            
                            data={profileLists}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>
            </View>
        )
}
const Styles = StyleSheet.create({

    flatlistdesign:{
        marginHorizontal: '2%',
        padding: 10,
        
       
    },
    categorytitle:{
    fontSize: 15,
    color: '#8891a8',
    fontWeight: 'bold'
},
categoryinfo:{
    fontSize: 10,
    color: '#8891a8',
},
categoryview:{
  flexDirection: 'row',  
  marginTop: 10,
  width: '95%', 
  //height: 130,
  margin: '1.75%',
 
  borderRadius: 8,
  padding: 10,
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
}
})