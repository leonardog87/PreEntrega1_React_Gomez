import { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // debugger;
                const response = await fetch(url);
                const result = await response.json();
                setTimeout(() => {
                    setData(result);
                }, 500);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return { data }
}

export default UseFetch




