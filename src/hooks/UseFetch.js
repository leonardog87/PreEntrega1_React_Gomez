import { useEffect, useState } from 'react';

const UseFecth = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
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
    }, [url]);

    return { data }
}

export default UseFecth




