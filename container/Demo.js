import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

export default function Demo() {
    const [img, setImg] = useState(null);

    const choosfile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(async image => {
            console.log(image);
            setImg(image.path)
            let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
            const reference = storage().ref('imageName');
            try {
                await reference.putFile(image.path);
            } catch(error) {
                console.log(error)
            }
          });
    }

    return (
        <View>
            <Button title="Upload" onPress={choosfile} />
        </View>
    )
}
