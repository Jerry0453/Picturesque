import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const getImages = async (uid) => {
    return new Promise(async (resolve, reject) => {
        console.log('1');
        console.log(uid)
      firestore()
        .collection('Photos')
        .where('uid', '==', uid)
        .get()
        .then(querySnapshot => {
            let tempPhotos = [];
            querySnapshot.forEach((doc) => {
                tempPhotos.push({
                    id: doc.id,
                    img: doc.data().img,
                    uid: doc.data().uid,
                });
            });
            resolve({photos: tempPhotos});
        })
        .catch(error => {
          const err = {
            status: authenticationStatus.SOMETHING_WENT_WRONG,
            msg: 'Something went wrong!',
          };
          reject(err);
        });
    });
  };

export const userProfileFunctions = {
    getImages,
};