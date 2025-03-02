import { useEffect, useState, useRef } from 'react';
import { db } from './database';
import { getDocs, collection } from 'firebase/firestore';

const useFetch = (url, delay = 0) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                let result;

                if (url) {
                    const response = await fetch(url, { signal: abortController.signal });
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }
                    result = await response.json();
                } else {
                    const querySnapshot = await getDocs(collection(db, 'products'));
                    result = [];
                    querySnapshot.forEach((doc) => {
                        result.push({ id: doc.id, ...doc.data() });
                    });
                }

                if (delay > 0) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                }

                if (isMounted) {
                    setData(result);
                }
            } catch (error) {
                if (isMounted && error.name !== 'AbortError') {
                    setError(error.message || 'Error fetching data');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            abortController.abort();
        };
    }, [url, delay]);

    return { data, loading, error };
};

// const useFetch = (url) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let result;
//                 if (url) {
//                     const response = await fetch(url);
//                     result = await response.json();
//                 } else {
//                     const querySnapshot = await getDocs(collection(db, 'products'));
//                     result = [];
//                     querySnapshot.forEach((doc) => {
//                         result.push({ id: doc.id, ...doc.data() });
//                     });
//                 }
//                 setTimeout(() => {
//                     setData(result);
//                 }, 250);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [url]);

//     return { data }
// }

// const useFetch = (url, delay = 0) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const isMounted = useRef(true);

//     useEffect(() => {
//         const abortController = new AbortController();

//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 let result;
//                 if (url) {
//                     Validar la URL
//                     if (typeof url !== 'string' || !url.trim()) {
//                         throw new Error('Invalid URL');
//                     }

//                     const response = await fetch(url, { signal: abortController.signal });
//                     if (!response.ok) {
//                         throw new Error(`Error: ${response.status} ${response.statusText}`);
//                     }
//                     result = await response.json();
//                 } else {
//                     Lógica para Firestore
//                     const querySnapshot = await getDocs(collection(db, 'products'));
//                     result = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//                 }

//                 Simular un retraso si es necesario
//                 if (delay > 0) {
//                     await new Promise((resolve) => setTimeout(resolve, delay));
//                 }

//                 Actualizar el estado solo si el componente está montado
//                 if (isMounted.current) {
//                     setData(result);
//                 }
//             } catch (error) {
//                 if (isMounted.current && error.name !== 'AbortError') {
//                     setError({
//                         message: error.message || 'Error fetching data',
//                         stack: error.stack,
//                     });
//                 }
//             } finally {
//                 if (isMounted.current) {
//                     setLoading(false);
//                 }
//             }
//         };

//         fetchData();

//         return () => {
//             isMounted.current = false;
//             abortController.abort();
//         };
//     }, [url, delay]);

//     return { data, loading, error };
// };

export default useFetch;

