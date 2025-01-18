import './IconGarbage.scss';

const IconGarbage = ({ event }) => {
    return (
        <>
            <div className="icon-garbage">
                <img src="src/assets/icons/delete_16.png" alt="img-list1" onClick={event} />
            </div>
        </>
    )
}

export default IconGarbage