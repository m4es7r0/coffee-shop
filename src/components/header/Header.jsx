import { Nav } from '../nav/Nav'
import './header.scss'

export const Header = ({...props}) => {
    const titleClasses = props.titleMod || ''

    return (
        <header className='header header-container'>
            <Nav className={'nav__header'} />
            <h1 className={`title ${titleClasses}`}>{props.title}</h1>
        </header>
    )
}
