import { useEffect, useState } from 'react';

const UseFecth = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    return { data }
}

export default UseFecth