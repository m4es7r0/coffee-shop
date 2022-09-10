import { Header } from "../header/Header"
import { MainCard } from "../card/MainCard"

import coffeeBeansWhite from '../../img/items/beans-logo-white.svg'
import coffeeBeans from '../../img/items/beans-logo.svg'
import solimoCoffee from '../../img/items/solimo-coffee.svg'
import prestoCoffee from '../../img/items/presto-coffee.svg'
import aromisticoCoffee from '../../img/items/aromistico-coffee.svg'

import './main.scss'
import { Footer } from "../footer/Footer"

export const Main = () => {
    return (
        <>
            <section className="section section__header">
                <Header />
                <div className="container flex-col">
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
            <section className="section section__our">
                <div className="container">
                    <h2 className="subtitle subtitle__our">Our best</h2>
                    <div className="card-block flex-row">
                        <MainCard
                            img={solimoCoffee} 
                            title={'Solimo Coffee Beans 2 kg'} 
                            price={'10.73'}/>
                        <MainCard
                            img={prestoCoffee} 
                            title={'Presto Coffee Beans 1 kg'} 
                            price={'15.99'}/>
                        <MainCard
                            img={aromisticoCoffee} 
                            title={'AROMISTICO Coffee 1 kg'} 
                            price={'6.99'}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
