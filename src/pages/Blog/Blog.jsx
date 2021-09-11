import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

import BlogComponent from '../../Components/BlogComponent/BlogComponent';

const baseURL = 'https://backend-server-blog.herokuapp.com/blogs'

// const baseURL ="http://localhost:3001/blogs"

function Blog(){
    let {blogId} = useParams()
    
    const [blog, setBlog] = useState({})
    useEffect(()=>{
        fetch(`${baseURL}/${blogId}`)
            .then((res)=> {
                return res.json()
            })
            .then((data)=>{
                // console.log(data.data)
                setBlog(data.data)
            })
    },[blogId])
    
    return(
        <BlogComponent data={blog} />
    )

}

export default Blog