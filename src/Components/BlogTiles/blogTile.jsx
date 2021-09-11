import React from 'react';
import { Link } from 'react-router-dom'
import styles from './blogTile.module.css'

function BlogTile(props){
    let {blogId, blogTitle , author , blogImage} = props.data
    return(
        <div className={styles.blogTile} id={blogId}>
            <div>
                <Link to={`/${blogId}`} >
                    <h2 className={styles.link} >{blogTitle}</h2>
                </Link>
                <p className={styles.author}>{author}</p>
            </div>
            {(blogImage !== '')?
            <div className={styles.image}>
                <img src={blogImage}  alt={blogTitle}/>
            </div>
            :''}
        </div>
    )
}
export default BlogTile;