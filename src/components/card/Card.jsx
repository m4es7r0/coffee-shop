import { Link } from 'react-router-dom'

import './card.scss'

export const Card = ({ img, title, from, price, id = 1 }) => {
  return (
    <Link className="card flex-col" to={`/shop/${id}`}>
      <div className="card__header flex-row">
        <img src={img} alt={'coffee card'} />
      </div>
      <div className="card__footer">
        <p className='card__title'>{title}</p>
        {from && <p className='card__from'>{from}</p>}
        <p className='card__price'>{`${price}$`}</p>
      </div>
    </Link>
  )
}