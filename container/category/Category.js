import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { categoryFunctions } from "../../customFunctions/category/categoryFunctions";
import normalize from '../../constants/normalize';
export default function Category({navigation}){

    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        const category = await categoryFunctions.getCategories();
        setCategories(category.Data);
        console.log(categories)
    }

    useEffect(() => {
        loadCategories();
    }, [])

    const renderItem = ({ item }) => {
        return(  
            <TouchableOpacity style={Styles.categoryview} onPress={() => navigation.navigate('ProfileList', {
                categoryId: item.id,
            })}>
                <View style={Styles.renderItemStyle}>
                    <Image source={{uri: item.img}} style={Styles.ImgStyle} />
                </View>
                <Text style={Styles.gallerycategory}>{item.category_name}</Text>
            </TouchableOpacity>
     )};
        return(
            <View  style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView>
                    <View style={{flex: 0.1, justifyContent: 'center', marginHorizontal: normalize(20)}}>
                    <Text style={{fontSize: normalize(30), marginVertical: normalize(20), fontWeight: 'bold', color: '#38486E',}}>Category</Text>
                    </View>
                    <View style={{flex: 0.9}}>
                    <FlatList 
                        style={Styles.flatlistdesign}            
                        data={categories}
                        numColumns={2}
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
        padding: 10
    },
    gallerycategory:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
},
ImgStyle: {
    borderRadius: 10,
    height: 60,
    width: 60
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