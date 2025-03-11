import { db } from './database';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';

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
                // const signal = abortController.signal;
                
                if (url) {
                    // const response = await fetch(url, { signal });
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

export default useFetch;