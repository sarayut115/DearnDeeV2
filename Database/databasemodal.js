// import firebaseApp from "./Connec";
// import 'firebase/firestore'

// const DB = firebaseApp.firestore()
// const temp = DB.collection('material_order');
// const Data = () => {
//     temp.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });
// }

// const addData = (data) => {
//     DB.collection("test").add(data)
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
// }
// export default {Data,addData}

// import firebaseApp from './Connec';
// import 'firebase/firestore';

// const DB = firebaseApp.firestore();

// const setData = (type) => {
//   DB.collection('maximus').doc('type').set({ type })
//     .then(() => {
//       console.log("Data successfully written!");
//     })
//     .catch((error) => {
//       console.error("Error writing document: ", error);
//     });
// };

// export default setData;


