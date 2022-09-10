import './about.scss'
import coffeeBeans from '../../img/items/beans-logo.svg'
import girlWithCoffee from '../../img/items/coffee-page/girl-with-coffee.svg'
import coffeeBlackAndWhite from '../../img/items/goods-page/coffee-B&W.svg'

export const About = ({ ...props }) => {
    const url = props.img === 'coffee-page' ? girlWithCoffee : coffeeBlackAndWhite

    return (
        <div className="about-block">
            <div className="about-block__image">
                <img src={url} alt="figure" />
            </div>
            <div className="about-block__info">
                <div className="about-title">
                    <h2 className="subtitle subtitle__about">{props.title}</h2>
                    <img className="beans-logo" src={coffeeBeans} alt="coffee beans" />
                </div>
                <div className="about-subtitle">
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
        </div>
    )
}
