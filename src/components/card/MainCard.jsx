import './mainCard.scss'

export const MainCard = ({ img, title, price }) => {
  return (
    <div className="card flex-col">
      <div className="card__header flex-row">
        <img src={img} alt={'coffee card'} />
      </div>
      <div className="card__footer">
        <p className='card__title'>{title}</p>
        <p className='card__price'>{`${price}$`}</p>
      </div>
    </div>
  )
}
