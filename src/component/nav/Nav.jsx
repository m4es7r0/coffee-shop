import './nav.scss'
import coffeeGrainLogo from '../../img/items/grain-logo.svg'

export const Nav = () => {
  return (
    <nav className="nav nav__header">
        <img src={coffeeGrainLogo} alt="coffee-grain-logo" aria-label='coffee-grain' />
        <ul className='menu'>
            <li className='menu__item'><p>Coffee house</p></li>
            <li className='menu__item'><p>Our coffee</p></li>
            <li className='menu__item'><p>For your pleasure</p></li>
        </ul>
    </nav>
  )
}
