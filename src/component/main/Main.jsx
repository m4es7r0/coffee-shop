import { Header } from "../header/Header"
import './main.scss'
import coffeeBeansWhite from '../../img/items/beans-logo-white.svg'
import coffeeBeans from '../../img/items/beans-logo.svg'

export const Main = () => {
    return (
        <>
            <section className="section section__header">
                <Header />
                <div className="container flex">
                    <img className="beans-logo" src={coffeeBeansWhite} alt="coffee beans" />
                    <h2 className="subtitle subtitle__header">We makes every day full of energy and taste<br />Want to try our beans?</h2>
                    <button className="button button__main">More</button>
                </div>
            </section>
            <section className="section section__about">
                <div className="container">
                    <h2 className="subtitle subtitle__about">About Us</h2>
                    <img className="beans-logo" src={coffeeBeans} alt="coffee beans" />
                    <article className="text-block">
                        <p className="text-block__item">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <p className="text-block__item">
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}
