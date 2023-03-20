import PropTypes from 'prop-types'

export const GifItem = ({ image: { title, url } }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title.toUpperCase()}</p>
    </div>
  )
}

GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
