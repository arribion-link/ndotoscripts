import '../css/books.css'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import BooksCTA from '../components/books/BooksCTA'
const BooksCatalog = () => {
  return (
      <>
          <Header />
          <main>   
          <BooksCTA />
        
          </main>
          <Footer/>
      </>
  )
}

export default BooksCatalog
