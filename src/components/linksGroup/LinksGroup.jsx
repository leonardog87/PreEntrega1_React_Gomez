import './LinksGroup.scss'
import Link from '../link/Link'

const LinksGroup = ({ children }) => {

    return (
        <>
            <div className="links-group">
                <ul>
                    {children}
                </ul>
            </div>
        </>
    )
}

export default LinksGroup