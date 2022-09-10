import { About } from '../../components/about/About'
import { Header } from '../../components/header/Header'
import './shop.scss'

export const Shop = () => {
    return (
        <>
            <section className='section section__header-our'>
                <Header title={'Our Coffee'} />
            </section>
            <section className='section section__about-our'>
                <div className="container">
                    <About title={'About our beans'} img={'coffee-page'} />
                </div>
            </section>
        </>
    )
}
