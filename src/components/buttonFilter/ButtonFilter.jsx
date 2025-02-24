import './ButtonFilter.scss';

const ButtonFilter = ({ text, id, event }) => {
    return (
        <>
            <div className="button-filter">
                <input type="button" value={text} id={id} onClick={event} />
            </div>
        </>
    )
}

export default ButtonFilter;