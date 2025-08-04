import  BlogCard  from '../cards/BookCard';

const BooksCTA = () => {
  return (
      <>
          <section className="books-cta">
              <h1>Explore Our Collection of Books</h1>
              <p>Discover a wide range of books across various genres. Whether you're looking for fiction, non-fiction, or educational materials, we have something for everyone.</p>
              <button className="btn">Browse Books</button>
          </section>
          <section className="books-list">
              {/* Here you can map through an array of books and render BookCard components */}
        <BlogCard
          title='The Art of Coding'
          price='$29.99'
          description='A comprehensive guide to mastering coding skills.'
          imageUrl='https://images.pexels.com/photos/1598667/pexels-photo-1598667.jpeg'
        />
        <BlogCard
          title='Understanding AI'
          price='$34.99'
          description='An insightful book on the principles of artificial intelligence.'
          imageUrl='https://images.pexels.com/photos/386196/pexels-photo-386196.jpeg'
        />
          <BlogCard
          title='The Art of Coding'
          price='$34.99'
          description='An insightful book on the principles of artificial intelligence.'
          imageUrl='https://images.pexels.com/photos/386196/pexels-photo-386196.jpeg'
        />
          </section>
      
      </>
  )
}

export default BooksCTA
