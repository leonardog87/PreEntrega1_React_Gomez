import './UnexpectedError.scss';

const UnexpectedError = () => {

    return (
        <>
            <div className='unexpectedError'>
                <h2>500</h2>
                <h3>Unexpected error ;(</h3>
                <p>An error occurred and your request couldn't be completed. Please try again</p>
            </div>
        </>
    )
}

export default UnexpectedError;