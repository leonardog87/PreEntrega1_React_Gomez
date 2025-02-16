import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
    return (
        <>
            <SpinnerCircular
                size={50}
                thickness={100}
                speed={100}
                color="rgba(170, 172, 57, 0.31)"
                secondaryColor="rgba(0, 0, 0, 0.44)" />
        </>
    );
}

export default Loader;