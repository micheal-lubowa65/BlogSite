const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;


    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p> <br />
                    <button onClick={() => handleDelete(blog.id) }>Delete Blog</button>

                </div>

            ))}

        </div>


     );
}
 
export default BlogList;