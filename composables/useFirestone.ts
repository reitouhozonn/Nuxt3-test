// import {
//     getFirestore,
//     collection,
//     query,
//     where,
//     getDocs,
// } from 'firebase/firestore';

// import { firebaseInit } from './firebaseInit';

// export const useFirestore = () => {
//     const db = getFirestore(firebaseInit());

//     const GetArticles = async () => {
//         const q = query(
//             collection(db, 'articles'),
//         );
//         const querySnapshot = await getDocs(q);

//         querySnapshot.forEach((doc) => {
//             console.log(doc.data());
//         });
//     };
//     return {
//         GetArticles,
//     };
// };
