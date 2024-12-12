import './IconCLose.scss'

const IconClose = ({event}) => {
    return (
        <>
            <a className="icon-close" onClick={event}><img src="./src/assets/icons/close.png" alt="img-list1" /></a>
        </>
    )
}

export default IconClose