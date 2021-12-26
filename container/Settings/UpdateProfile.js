import React, {useState, useEffect} from 'react';
import { TextInput, View, Text, ImageBackground, StyleSheet, Dimensions,  ScrollView, Image, TouchableOpacity, Alert,} from 'react-native'
import normalize from '../../constants/normalize';
import { categoryFunctions } from '../../customFunctions/category/categoryFunctions';
import { userAuthFunctions } from '../../customFunctions/userAuth/userAuthFunctions';
import MultiSelect from 'react-native-multiple-select';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

export default function UpdateProfile({navigation, route}) {
    const { authorisedUserDetails } = route.params;
    const [updatedUserDetails, setUpdatedUserDetails]= useState({...authorisedUserDetails});
    const [temppassword1, setTempPassword1] = useState();
    const [temppassword2, setTempPassword2] = useState();
    const [categories, setCategories] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [profileImage, setProfileImage] = useState();
    const [coverImage, setCoverImage] = useState();
    const [isLoading1, setIsLoading1] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    const loadCategories = async () => {
        const category = await categoryFunctions.getCategoriesforOption();
        setCategories(category.Data);
    }

    useEffect(() => {
        loadCategories();
    }, [])

    const onSignOut = () => {
        try {
            auth()
            .signOut()
            .then(() => console.log('User signed out!'));
            navigation.navigate('WelcomeScreen');
        } catch(error) {
            console.log(error);
        }  
    }


    const submitChanges = async () => {
        console.log(selectedItem.length)
        if(selectedItem.length > 0) {
            console.log('1')
            setUpdatedUserDetails({...updatedUserDetails, categories: selectedItem})
            console.log('1.5')
        } else {
            console.log('2')
            setUpdatedUserDetails({...updatedUserDetails, categories: authorisedUserDetails.categories})
        }
        if(!temppassword1) {
            return(
                Alert.alert("Enter current password to verify yourself.")
            )
        }
        if(temppassword1 === authorisedUserDetails.password) {
            if(profileImage) {
                let imageName = profileImage.substring(profileImage.lastIndexOf('/')+1);
                try {
                    await storage()
                            .ref('Images')
                            .child(imageName)
                            .putFile(profileImage)
                            .then((res) => {
                                storage()
                                .ref('Images')
                                .child(imageName)
                                .getDownloadURL()
                                .then((imgUrl) => {
                                    firestore()
                                    .collection('Users')
                                    .doc(authorisedUserDetails.uid)
                                    .update({
                                        ...updatedUserDetails,
                                        img: imgUrl,
                                    }); 
                                    console.log(imgUrl)
                                })
                            })
                } catch(error) {
                    console.log(error)
                }
            }
            if(coverImage) {
                let imageName = coverImage.substring(coverImage.lastIndexOf('/')+1);
                try {
                    await storage()
                            .ref('Images')
                            .child(imageName)
                            .putFile(coverImage)
                            .then((res) => {
                                storage()
                                .ref('Images')
                                .child(imageName)
                                .getDownloadURL()
                                .then((imgUrl) => {
                                    firestore()
                                    .collection('Users')
                                    .doc(authorisedUserDetails.uid)
                                    .update({
                                        ...updatedUserDetails,
                                        coverPic: imgUrl,
                                    }); 
                                    console.log(imgUrl)
                                })
                            })
                } catch(error) {
                    console.log(error)
                }
            }
            userAuthFunctions.updateUserInfo(updatedUserDetails, authorisedUserDetails.uid);
        }
    }

    const chooseProfileImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(async image => {
            console.log(image);
            setProfileImage(image.path)
        });
    }

    const chooseCoverImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(async image => {
            console.log(image);
            setCoverImage(image.path)
        });
    }

    return (
        <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
             <ImageBackground 
                 source={require('../Images/settingupperpic.jpg')}
                 style={Styles.imagebg2}>
             </ImageBackground>
            <View>
                <View style={{width: '90%',backgroundColor:'white', padding:normalize(20),
                         marginTop: normalize(170),marginLeft:normalize(20), borderRadius: 30,  shadowColor: "#000",
                         shadowOffset: {
                         width: 0,
                         height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,}}>
                        
                        <Image 
                            source={{uri: authorisedUserDetails.img}}
                            style={Styles.profileimg}>    
                        </Image>
                        
                        <TouchableOpacity onPress={chooseProfileImage}>
                            <Text style={Styles.namedesign}>Change profile photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={chooseCoverImage}>
                            <Text style={Styles.namedesign}>Change Cover photo</Text>
                        </TouchableOpacity>

                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Name</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, fullName: value})} 
                                style={{color: 'black', }} 
                                placeholder={authorisedUserDetails.fullName}/>
                        </View>
                        
                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Username</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, userName: value})} 
                                style={{color: 'black', }}  
                                placeholder={authorisedUserDetails.userName} />
                        </View>
                        
                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Email</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, email: value})} 
                                style={{color: 'black', }} 
                                placeholder={authorisedUserDetails.email} />
                        </View>
                        
                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Contact No.</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, contact: value})} 
                                style={{color: 'black', }} 
                                placeholder={authorisedUserDetails.contact}/>
                        </View>

                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Location</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, location: value})} 
                                style={{color: 'black', }} 
                                placeholder={authorisedUserDetails.location}/>
                        </View>

                        <View>
                        <MultiSelect
                            hideTags
                            items={categories}
                            uniqueKey="id"
                            //ref={(component) => { this.multiSelect = component }}
                            onSelectedItemsChange={(value) => setSelectedItem(value)}
                            selectedItems={selectedItem}
                            selectedItemTextColor="#CCC"
                            selectedItemIconColor="#CCC"
                            itemTextColor="#000"
                            searchInputStyle={{ color: '#CCC' }}
                            submitButtonColor="#CCC"
                            submitButtonText="Submit"
                            />
                        </View>

                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>Current Password</Text>
                            <TextInput 
                                onChangeText={(value) => setTempPassword1(value)} 
                                style={{color: 'black', }} 
                                placeholder='*************' />
                        </View>

                        <View style={Styles.inputdesign}>
                            <Text style={{color: 'black', fontWeight:'bold', marginTop: 10}}>New Password</Text>
                            <TextInput 
                                onChangeText={(value) => setUpdatedUserDetails({...updatedUserDetails, password: value})} 
                                style={{color: 'black', }} 
                                placeholder='*************' />
                        </View>

                        <TouchableOpacity onPress={submitChanges}>
                        <Text style={Styles.passchange}>Submit changes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onSignOut}>
                        <Text style={Styles.passchange}>Logout</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
const Styles=StyleSheet.create({
    imagebg2:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.25,
        position: 'absolute',
      
    },
    profileimg:{
        position: 'absolute',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: normalize(-75),
        marginLeft: normalize(100),
        borderWidth: 4,
        borderColor: 'white',
    },
    namedesign:{
        color: '#38486e',
        fontSize: normalize(18),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputdesign:{
       
        width: '100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    passchange:{
        marginTop: 20,
        color: 'white',
        padding: 10,
        backgroundColor: '#38486e',
        borderRadius: 10,
        textAlign: 'center',

    }
})
