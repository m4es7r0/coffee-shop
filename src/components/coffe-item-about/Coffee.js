import React from 'react'

import { About } from '../about/About'
import { Header } from '../header/Header'

import coffeeBeans from '../../img/items/beans-logo.svg'
import './coffee.scss'
import { Footer } from '../footer/Footer'

export const Coffee = () => {
    return (
        <>
            <header className='section section__header-our'>
                <Header title={'Our Coffee'} />
            </header>
            <div className="container">
                <div className="coffee">
                    <div className="coffee__image"></div>
                    <div className="coffee__about">
                        <h2>About it</h2>
                        <img className="beans-logo" src={coffeeBeans} alt="coffee beans" />
                        <p><strong>Country: </strong>Brasil</p>
                        <p><strong>Description: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <span><strong>Price: </strong>16.99$</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
