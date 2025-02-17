import { useEffect, useState } from 'react';

// const UseFetch = (url) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();
//                 setTimeout(() => {
//                     setData(result);
//                 }, 250);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return { data }
// }

// export default UseFetch


//connect to firebase
import { db } from './database';
import { getDocs, collection } from 'firebase/firestore';


const fetchFB = (url) => {
    const [data, setData] = useState([]);	

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result;
                if (url) {
                    const response = await fetch();
                    result = await response.json();
                } else {
                    const querySnapshot = await getDocs(collection(db, 'products'));
                    result = [];
                    querySnapshot.forEach((doc) => {
                        result.push({ id: doc.id, ...doc.data() });
                    });
                }
                setTimeout(() => {
                    setData(result);
                }, 250);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [url]);

    return { data }
}

export default fetchFB;

