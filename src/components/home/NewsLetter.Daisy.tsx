
const NewsLetterDaisy = () => {
    return (
      <>
        <section className="newsletter-banner-section">
            <h1>Join 10,000+ and Get Inspiration Straight To your Inbox</h1>
            <form action="/">
                <input
                    type="email"
                    placeholder="Your Email..." 
                />
                <button>Send</button>
            </form>
        </section>
            <section className="about-section">
                <div className="about-container">
                    <h1>Who is Daisy?</h1>
                    <img
                        src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww" 
                        alt="Daisy Zizi"
                        className="about-image"
                    />
                    <h3></h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Totam eaque in ea inventore magnam officia doloribus mollitia.
                        Aperiam quibusdam repellendus explicabo reprehenderit esse
                        ratione magnam distinctio. Dicta reiciendis aspernatur maiores?
                    </p>
                    <a href="../pages/contact.html">
                        <button className="about-cta-btn">Talk With Me</button>
                    </a>
                </div>
                <div className="sample-song-from-youtube">
                    <p>Listen to my latest song on YouTube</p>
                    <iframe
                        width="318"
                        height="250"
                        src="https://www.youtube.com/embed/6RHShx7nDqU?si=OOatbgELuRsoMj7w" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </section>
      </>
  )
}

export default NewsLetterDaisy
