import { SpinnerCircular } from 'spinners-react';
import './loader.scss'

const Loader = () => {
    return (
        <>
        <div className='loaderClass'>
            <SpinnerCircular
                size={50}
                thickness={100}
                speed={50}
                color="rgba(170, 172, 57, 0.31)"
                secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
        </>
    );
}

export default Loader;