import React from 'react'
import { useHttp } from '../../hooks/http'
import { ErrorMessage } from '../../components/error/ErrorMessage'

import { About } from '../../components/about/About'
import { Card } from '../../components/card/Card'
import { Filter } from '../../components/filter/Filter'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

import aromisticoCoffee from '../../img/items/aromistico-coffee.svg'
import './shop.scss'

export const Shop = () => {
    const [cards, setCards] = React.useState([])

    const { request, loading, error } = useHttp()
    React.useEffect(() => {
        request('http://localhost:3001/cards').then(setCards)
    }, [])

    return (
        <>
            <header className='section section__header-our'>
                <Header title={'Our Coffee'} />
            </header>
            <section className='section section__about-our'>
                <div className="container">
                    <About title={'About our beans'} img={'coffee-page'} />
                </div>
            </section>
            <section className="section section__filter">
                <div className="container">
                    <Filter />
                    <div className="card__block">
                        {error ? <ErrorMessage /> : null}
                        {
                            loading ? 'loading...' :
                                cards.map(el => {
                                    return <Card
                                        key={el.id}
                                        img={aromisticoCoffee}
                                        title={el.title}
                                        from={el.from}
                                        price={el.price} />
                                })
                        }
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
