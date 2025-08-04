import BlogCard from '../cards/BlogCard'

const BlogSection = () => {
  return (
    <>
        <section className="blog-section" id="Blogs">
            <h1>Featured Top Blogs</h1>
            <div className="blog-container">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
            </div>
            <div className="cta-explore-more-blogs-container">
                <a href="../pages/blog.html">
                    <button className="cta-explore-more-blogs">Explore More Blogs </button>
                </a>
            </div>
        </section>

    </>
  )
}

export default BlogSection
