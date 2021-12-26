import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const getPhotographerList = async () => {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('Users')
      .where('role', '==', "Photographer")
      .get()
      .then(querySnapshot => {
            let tempList = [];
            querySnapshot.forEach((doc) => {
                tempList.push({
                    ...doc.data()
                });
            });
            resolve({Data: tempList});
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

const getRecentUploads = async () => {
    return new Promise(async (resolve, reject) => {
      firestore()
        .collection('Photos')
        .get()
        .then(querySnapshot => {
              let tempList = [];
              querySnapshot.forEach((doc) => {
                  tempList.push({
                      ...doc.data()
                  });
              });
              resolve({Data: tempList});
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

export const newsfeedFunctions = {
    getPhotographerList,
    getRecentUploads,
};
