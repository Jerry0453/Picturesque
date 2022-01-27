import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const addHireInfo = async (hiringDetails, hireUid, phUid) => {
  console.log(phUid)
    return await firestore()
      .collection('Hiring')
      .doc()
      .set({
        ...hiringDetails,
        hirer: hireUid,
        photographer: phUid,
      })
};

const getHireInfo = async (uid) => {
    return new Promise(async (resolve, reject) => {
        console.log('1');
        console.log(uid)
      firestore()
        .collection('Hiring')
        .where('photographer', '==', uid)
        .get()
        .then((querySnapshot) => {
                    let tempPhotos = [];
                    querySnapshot.forEach((doc) => {
                        tempPhotos.push({
                            ...doc.data(),
                            id: doc.id,
                        });
                    });
                    resolve({data: tempPhotos});
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

const getAcceptedHireInfo = async (uid) => {
    return new Promise(async (resolve, reject) => {
        console.log('1');
        console.log(uid)
      firestore()
        .collection('Hiring')
        .where('photographer', '==', uid)
        .get()
        .then((res) => {
            firestore()
                .collection('Hiring')
                .where('status', '==', "Accepted")
                .get()
                .then(querySnapshot => {
                    let tempPhotos = [];
                    querySnapshot.forEach((doc) => {
                        tempPhotos.push({
                            ...doc.data(),
                            id: doc.id,
                        });
                    });
                    resolve({data: tempPhotos});
                })
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

const cancelHireStatus = async (item, id) => {
    return await firestore()
        .collection('Hiring')
        .doc(id)
        .update({
          ...item,
          status: 'Declined',
        });
};

const confirmHireStatus = async (item, id) => {
    console.log(item)
    return await firestore()
      .collection('Hiring')
      .doc(id)
      .update({
        ...item,
        status: 'Accepted',
    });
};

export const hireFunctions = {
    addHireInfo,
    getHireInfo,
    cancelHireStatus,
    confirmHireStatus,
    getAcceptedHireInfo,
};
