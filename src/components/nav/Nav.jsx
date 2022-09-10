import './nav.scss'
import coffeeGrainLogo from '../../img/items/grain-logo.svg'
import coffeeGrainLogoBlack from '../../img/items/grain-black-logo.svg'

export const Nav = ({...props}) => {
  const url = props.color ? coffeeGrainLogoBlack : coffeeGrainLogo
  
  return (
    <nav className={`nav ${props.className || ''}`}>
        <img src={url} alt="coffee-grain-logo" />
        <ul className='menu'>
            <li className='menu__item'><p className={props.color || ''}>Coffee house</p></li>
            <li className='menu__item'><p className={props.color || ''}>Our coffee</p></li>
            <li className='menu__item'><p className={props.color || ''}>For your pleasure</p></li>
        </ul>
    </nav>
  )
}
