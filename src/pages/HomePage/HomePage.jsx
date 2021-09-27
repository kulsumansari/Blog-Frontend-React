import React,{useEffect , useState} from 'react';
import BlogTile from '../../Components/BlogTiles/blogTile';
import styles from './HomePage.module.css'
import Modal from '../../Components/Modal/Modal';

const baseURL = 'https://backend-server-blog.herokuapp.com/blogs'

function HomePage(){
    
    const [Blogs ,setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch(baseURL)
            .then((res)=> {
                return res.json()
            })
            .then((data)=>{
                setTimeout(()=>{
                    setBlogs(data.data)
                    setIsLoading(false)
                },500)
                
            })
            .catch((err)=>{
                console.log(err)
                setIsLoading(false)
            })
    },[])
    

    return(
        <div className={styles.Container}>
            {isLoading ? 
            <Modal message='Loading...' type='LoadingModal'/>
            :
            <>
            <h1 className={styles.header}>BlogGet's Reading List</h1>
            { Blogs?
                <div className={styles.blogContainer}>
                    {    
                    <>
                        {Blogs.map((blog)=> (
                            <BlogTile key = {blog.blogId} data={blog} />
                        ))}
                    </>
                    }    
                </div> 
                :
                <Modal message='Data Cannot be fetched' type='ErrModal'/>
            }
            </>
        }
                </div>
        
    )

}

export default HomePage;
