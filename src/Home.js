import { useState } from "react";

const Home = () => {

        const[blogs, setBlogs] = useState([

            {title: 'My New Website', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'mario', id: 1},
            {title: 'Welcome party!', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'luigi', id: 2},
            {title: 'Nature', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'daisy', id: 3}
        ])

    return ( 
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p> <br />


                </div>

            ))}
        
        </div>

     );
}
 
export default Home;