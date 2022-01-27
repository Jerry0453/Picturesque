import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signUpWithEmail = async (email, password) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });  
};

const logInWithEmail = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {additionalUserInfo, user} =
        await auth().signInWithEmailAndPassword(email, password);
      const isNewUser = additionalUserInfo.isNewUser;
      resolve({isNewUser, user, additionalUserInfo});
    } catch (err) {
      const error = {
        status: authenticationStatus.INVALID_EMAIL_PASSWORD,
        msg: 'Invalid email or password!',
      };
      reject(error);
    }
  });
};

const storeUserInfo = async (newUser, uid) => {
    console.log(newUser)
    console.log(uid);
    return await firestore()
      .collection('Users')
      .doc(uid)
      .set({
        ...newUser,
        uid: uid,
      });
};

const updateUserInfo = async (updatedUserData, uid) => {
  console.log(updatedUserData)
  console.log(uid);
  return await firestore()
    .collection('Users')
    .doc(uid)
    .update({
      ...updatedUserData,
    });
};

const getUserInfo = async (uid) => {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('Users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          resolve({userData: documentSnapshot.data()});
        } else {
          reject({
            error: {
              status: authenticationStatus.INVALID_USER,
              msg: 'Invalid User',
            },
          });
        }
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

export const userAuthFunctions = {
    signUpWithEmail,
    storeUserInfo,
    updateUserInfo,
    logInWithEmail,
    getUserInfo,
};
