import HiWseller from "../cards/HiWseller"
import HiWbuyer from "../cards/HiWbuyer"

const IntroSectionHITs = () => {
    const daisy = {
        color:'dodgerblue'
    }
    return (
        <>
            <section className="introduction-section">

                <h1 className="cta-heading">
                    <span style={daisy}>ZIZI DAISY</span>
                    <br className="heading-break-mobile" />
                    A MARKETPLACE FOR AUTHORS
                </h1>

                <p className="cta-subheading">Your gateway to digital Books - buy, sell and Share Knowledge With Ease</p>
                
                <a href="/books">
                    <button className="cta-btn">Buy a Book Now </button>
                </a>
                <a href="/blogs">
                    <button className="cta-btn-blog">Read My Blog</button>
                </a>
                    
                <br /><br /><br /><br />
                    
                <div className="cta-search">
                    <input type="search" placeholder="Search for book,seller name, Blog..." />
                </div>
            </section>
                
            <section className="how-it-works-section">
                <h1 className="hIw-heading">How It Works</h1>
                <HiWseller />
                <HiWbuyer/>
            </section>
        </>
    )
}
  


export default IntroSectionHITs




