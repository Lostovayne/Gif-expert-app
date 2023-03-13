export const GifItem = ({ image: { title, url } }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title.toUpperCase()}</p>
    </div>
  )
}
