import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";

const categorydata = [
    {id : 1, img:require('../Images/bg1.jpg'), title:'Maliha Zahan Chodhury', email: 'u1604046@student.cuet.ac.bd', contact: '01739284716', location: 'Sufia Kamal Hall, CUET'},
    {id : 2, img:require('../Images/bg1.jpg'), title:'Kaniz Fatima Tonni',email: 'u1604053@student.cuet.ac.bd', contact: '01839284716', location: 'Sufia Kamal Hall, CUET'},
    {id : 3, img:require('../Images/bg1.jpg'), title:'Sabitri Sikdar', email: 'u1604039@student.cuet.ac.bd', contact: '01939284716', location: 'Sufia Kamal Hall, CUET'},
    {id : 4, img:require('../Images/bg1.jpg'), title:'Nizam Uddin', email: 'u1604056@student.cuet.ac.bd', contact: '01539284716', location: 'Sufia Kamal Hall, CUET'},
    {id : 5, img:require('../Images/bg1.jpg'), title:'Adiba Ibnat Hossain', email: 'u1604041@student.cuet.ac.bd', contact: '01639255716', location: 'Sufia Kamal Hall, CUET'},
    {id : 6, img:require('../Images/bg1.jpg'), title:'Angona Biswas', email: 'u1608046@student.cuet.ac.bd', contact: '01739299716', location: 'Sufia Kamal Hall, CUET'},
    {id : 7, img:require('../Images/bg1.jpg'), title:'Sharmin Ara', email: 'u1604044@student.cuet.ac.bd', contact: '01739284716', location: 'Sufia Kamal Hall, CUET'},
    {id : 8, img:require('../Images/bg1.jpg'), title:'Ratul Bow', email: 'u1604038@student.cuet.ac.bd', contact: '01739222716', location: 'Sufia Kamal Hall, CUET'},
    {id : 9, img:require('../Images/bg1.jpg'), title:'No Bestie', email: 'u1604000@student.cuet.ac.bd', contact: '01739284116', location: 'Sufia Kamal Hall, CUET'}
  ];
export default function ProfileList({navigation}){
    const renderItem = ({ item }) => {
        return(  
            <View style={Styles.categoryview} >
                <View style={{flex: 0.3, alignItems:'center', justifyContent:'center', marginRight: 10}}>
                    <Image source={item.img} style={Styles.profileimg}/>
                </View>
                <View style={{flex: 0.7, paddingTop: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={Styles.categorytitle}>{item.title}</Text>
                    </TouchableOpacity>
                    <Text style={Styles.categoryinfo}>Email: {item.email}</Text>
                    <Text style={Styles.categoryinfo}>Contact: {item.contact}</Text>
                    <Text style={Styles.categoryinfo}>Address: {item.location}</Text>
                </View>
            </View>
     )};
        return(
            <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white',}}>
            <View style={{flex:0.1, }}>
            <Text style={{color:'#38486e', fontSize:30, padding: 10,marginTop: 30, fontWeight: 'bold'}}>Profile List</Text>
            </View>
            <View style={{flex: 0.9}}>
            <FlatList style={Styles.flatlistdesign}            
            data={categorydata}
            
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
            </View>
            </View>
            </ScrollView>
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