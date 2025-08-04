
const Footer = () => {
  return (
    <>
        <footer className="footer">
           <h2>DAISY</h2>
        <a href="#" className="button"> ☕ Buy Me Coffee </a>
        <nav>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="/books-product">Books/Products</a></li>
            </ul>
        </nav>   
        <hr />
        <p>&copy; <span>2025</span> Daisy Zizi. All Rights Reserved.</p>
        {/* <!-- target="_blank" -->  */}
        <span><a href="#">Privacy Policy</a></span>
        <span><a href="#">Terms & Conditions</a></span>
                    
        <p className="arribion-line">
            Powered By:
            <span className="arribion">
                Arribion Technologies Ltd.
            </span>
        </p>
        </footer>   
       
    </>
  )
}

export default Footer
