import React,{useEffect , useState} from 'react';

import BlogTile from '../../Components/BlogTiles/blogTile';
import styles from './blogs.module.css'
const baseURL = 'https://backend-server-blog.herokuapp.com/blogs'


function Blogs(){
    
    const [Blogs ,setBlogs] = useState([])

    useEffect(()=>{
        fetch(baseURL)
            .then((res)=> {
                return res.json()
            })
            .then((data)=>{
                setBlogs(data.data)
            })
    },[])
    

    return(
        <div className={styles.Container}>
            <h1 className={styles.header}>BlogGet's Reading List</h1>
            <div className={styles.blogContainer}>
                {    
                <>
                    {Blogs.map((blog)=> (
                        <BlogTile key = {blog.blogId} data={blog} />
                    ))}
                </>
                }    
            </div> 
    </div>
    )

}

export default Blogs;