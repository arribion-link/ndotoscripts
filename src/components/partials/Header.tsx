
const Header = () => {
  const script = {
    color: 'dodgerblue'
  }
    return (
      <>
         <header>
          <p className="logo">
            <a href="/">Ndoto<span style={script}>Scripts</span></a>
          </p>
        <nav id="nav">
            <ul><a href="/">Home</a></ul>
            <ul><a href="/books">Book Listings</a></ul>
            <ul><a href="/blog">Blog</a></ul>
            <ul><a href="/about">About</a></ul>
            <ul><a href="/Contact">Contact</a></ul>
        </nav>
        <div>
            <a href="/register">
               <button className="register-btn">Join for free</button>
            </a>
            <a href="/sign-in">
              <button className="sign-in-btn">Sign In</button>
            </a>
        </div>
        </header>
      </>
  )
}

export default Header
