import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

        const[blogs, setBlogs] = useState(null)

        const [name, setName] = useState('Mario');

        const [isPending, setIsPending] = useState(true);

        const[error, setError] = useState(null);
        useEffect(() => {
           setTimeout(()=> {
            fetch(' http://localhost:8000/blogs')
                .then(res =>{

                    console.log(res);

                    if(!res.ok){
                        throw Error('Couldnt FETCH data for that resource')
                    }

                    return res.json(); 
                })
                .then(data =>{
                        console.log(data);
                        setBlogs(data);
                        setIsPending(false);
                        setError(null);
                    }) 
                    .catch(err=>{
                        setIsPending(false)
                    setError(err.message)     
                    })
           }, 1000)
        }, []);

    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs" /> }
           
           <button onClick={()=>setName('luigi')}>Click Me</button>
            <p>{name}</p>
        
        
        </div>

     );
}
 
export default Home;