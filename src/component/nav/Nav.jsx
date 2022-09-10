import './nav.scss'
import coffeeGrainLogo from '../../img/items/grain-logo.svg'
import coffeeGrainLogoBlack from '../../img/items/grain-black-logo.svg'

export const Nav = ({color, className}) => {
  let black = color === 'black'

  return (
    <nav className={`nav nav__header ${className}`}>
        <img src={black ? coffeeGrainLogoBlack : coffeeGrainLogo} alt="coffee-grain-logo" />
        <ul className='menu'>
            <li className='menu__item'><p className={black ? 'black' : ''}>Coffee house</p></li>
            <li className='menu__item'><p className={black ? 'black' : ''}>Our coffee</p></li>
            <li className='menu__item'><p className={black ? 'black' : ''}>For your pleasure</p></li>
        </ul>
    </nav>
  )
}
