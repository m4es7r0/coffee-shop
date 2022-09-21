import React from 'react'
import './filter.scss'

export const Filter = () => {
    return (
        <form className='filter'>
            <div>
                <label className='filter__label' htmlFor="filter">Looking for</label>
                <input className='filter__input' type="text" inputMode="search" placeholder='start typing here...' />
            </div>
            <div>
                <label className='filter__label filter__label-second' htmlFor="filter">Or filter</label>
                <button className='filter__button active'>Brazil</button>
                <button className='filter__button'>Kenya</button>
                <button className='filter__button'>Columbia</button>
            </div>
        </form>
    )
}
