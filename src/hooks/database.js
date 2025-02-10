import { useEffect, useState } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGEt7ogsl0h7J7kUIPUbwhefNfCKKc5sE",
    authDomain: "react-coderhouse-3e78c.firebaseapp.com",
    projectId: "react-coderhouse-3e78c",
    storageBucket: "react-coderhouse-3e78c.firebasestorage.app",
    messagingSenderId: "88572844706",
    appId: "1:88572844706:web:d5ae515fc678b9ca8295fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//DB
const db = getFirestore(app);

const UseFetch2 = async () => {
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef);

    return productsSnapshot;

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const result = await response.json();
    //             setTimeout(() => {
    //                 setData(result);
    //             }, 250);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // return { data }
}

export default UseFetch2




