import '../css/App.css'
import Header from '../components/partials/Header'
import IntroSectionHITs from '../components/home/IntroSection.HITs'
import BlogSection from '../components/home/BlogSection'
import NewsLetterDaisy from '../components/home/NewsLetter.Daisy'
import Footer from '../components/partials/Footer'
import TopSellers from '../components/home/TopSellers'
import DiscountBanners from '../components/home/DiscountBanners'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <IntroSectionHITs />
        <TopSellers />
        <DiscountBanners/>
        <BlogSection />
        <NewsLetterDaisy/>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
