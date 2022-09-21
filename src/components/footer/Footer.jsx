import { Nav } from "../nav/Nav"
import coffeeBeans from '../../img/items/beans-logo.svg'
import './footer.scss'

export const Footer = () => {
  return (
        <footer className="footer-container flex-col">
            <Nav className={'footer__nav'} color={'black'}/>
            <img src={coffeeBeans} alt="coffee beans" />
        </footer>
  )
}
