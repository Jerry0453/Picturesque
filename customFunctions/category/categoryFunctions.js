import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const getCategories = async () => {
    return new Promise(async (resolve, reject) => {
      firestore()
        .collection('Category')
        .get()
        .then(querySnapshot => {
            let tempCategory = [];
            querySnapshot.forEach((doc) => {
                tempCategory.push({
                    id: doc.id,
                    category_name: doc.data().category_name,
                    img: doc.data().img,
                });
            });
            resolve({Data: tempCategory});
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

const getCategoriesforOption = async () => {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('Category')
      .get()
      .then(querySnapshot => {
          let tempCategory = [];
          querySnapshot.forEach((doc) => {
              tempCategory.push({
                  id: doc.id,
                  name: doc.data().category_name,
              });
          });
          resolve({Data: tempCategory});
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

const getProfileListByCategory = async (categoryId) => {
    return new Promise(async (resolve, reject) => {
      firestore()
        .collection('Users')
        .where("categories", "array-contains", categoryId)
        .get()
        .then(querySnapshot => {
            let tempProfileList = [];
            querySnapshot.forEach((doc) => {
                tempProfileList.push({
                    ...doc.data(),
                });
            });
            console.log(tempProfileList);
            resolve({Data: tempProfileList});
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



export const categoryFunctions = {
    getCategories,
    getCategoriesforOption,
    getProfileListByCategory,
};