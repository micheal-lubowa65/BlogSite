import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

        const[blogs, setBlogs] = useState([

            {title: 'My New Website', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'mario', id: 1},
            {title: 'Welcome party!', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'luigi', id: 2},
            {title: 'Nature', body: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quia saepe quae impedit obcaecati nihil, quo, distinctio ab reprehenderit cupiditate soluta a voluptatem tempora similique repudiandae blanditiis odit nobis?', author: 'mario', id: 3}
        ])

        const handleDelete = (id) =>{
            const newBlogs = blogs.filter(blog => blog.id!==id);
            setBlogs(newBlogs);
        }


        useEffect(() => {
            console.log('use effect ran');
            console.log(blogs);
        });

    return ( 
        <div className="Home">
            <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs = {blogs.filter((blog)=> blog.author==='mario')} title="Marios Blogs"/>
        
        
        </div>

     );
}
 
export default Home;