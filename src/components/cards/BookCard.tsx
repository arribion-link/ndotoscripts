
type BookCardProps = {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}
const BookCard =
  ({title, price, description, imageUrl}:BookCardProps) => {
  return (
    <div className="book-card">
      <img
        src={imageUrl}
        alt={title}
        className="book-image"
      />
      <h3 className="books-title">{title}</h3>
      <p className="books-description">{description}</p>
      <p className="books-price">{ price }</p>
    </div>
  )
}

export default BookCard
