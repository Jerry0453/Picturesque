import auth from '@react-native-firebase/auth'

export const getUserID = () => {
    return auth().currentUser ? auth().currentUser.uid : null;
};