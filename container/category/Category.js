import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";

const categorydata = [
    {id : 1, title:'Portrait'},
    {id : 2, title:'Fashion'},
    {id : 3, title:'Sports'},
    {id : 4, title:'Still Life'},
    {id : 5, title:'Fine Art'},
    {id : 6, title:'Wedding'},
    {id : 7, title:'Event'},
    {id : 8, title:'Travel'},
    {id : 9, title:'Lifestyle'}
  ];
export default function Category({navigation}){
    const renderItem = ({ item }) => {
        return(  
            <TouchableOpacity style={Styles.categoryview} onPress={() => navigation.navigate('ProfileList')}>
            <Text style={Styles.gallerycategory}>{item.title}</Text>
            </TouchableOpacity>
     )};
        return(
            <ScrollView>
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex:0.1, }}>
            <Text style={{color:'#38486e', fontSize:30, padding: 10,marginTop: 30, fontWeight: 'bold'}}>Category</Text>
            </View>
            <View style={{flex: 0.9}}>
            <FlatList style={Styles.flatlistdesign}            
            data={categorydata}
            numColumns={2}
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
        padding: 10
    },
    gallerycategory:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
    
   
},
categoryview:{
    alignItems:'center',
    justifyContent:'center',
  marginTop: 10,
  width: '46%', 
  height: 130,
  margin: '1.75%',
  
  borderRadius: 8,
  padding: 3,
  
  backgroundColor: 'white',
  shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
}
})