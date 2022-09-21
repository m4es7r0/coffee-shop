import { Link } from 'react-router-dom'

import './nav.scss'
import coffeeGrainLogo from '../../img/items/grain-logo.svg'
import coffeeGrainLogoBlack from '../../img/items/grain-black-logo.svg'

export const Nav = ({ ...props }) => {
  const url = props.color ? coffeeGrainLogoBlack : coffeeGrainLogo

  return (
    <nav className={`nav ${props.className || ''}`}>
      <img src={url} alt="coffee-grain-logo" />
      <ul className='menu'>
        <Link to={'/'} className="menu__link"><li className='menu__item'><p className={props.color || ''}>Coffee house</p></li></Link>
        <Link to={'/shop'} className="menu__link"><li className='menu__item'><p className={props.color || ''}>Our coffee</p></li></Link>
        <Link to={'/about'} className="menu__link"><li className='menu__item'><p className={props.color || ''}>For your pleasure</p></li></Link>
      </ul>
    </nav>
  )
}
