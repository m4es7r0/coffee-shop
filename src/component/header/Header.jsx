import { Nav } from '../nav/Nav'
import './header.scss'

export const Header = () => {
    return (
        <header className='header header-container'>
            <Nav />
            <h1 className='title title__main'>Everything You Love About Coffee</h1>
        </header>
    )
}
