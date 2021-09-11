import React from 'react';
import styles from './BlogComponent.module.css'


function BlogContainer(props){
    let {blogTitle,blogContent,author,createdAt,blogImage,} = props.blogData
    return(
        <div className={styles.blogContainer}>
            <div className={styles.blogHeader}>
                <h1>{blogTitle}</h1>
                <div>
                    <span>By : {author}</span>
                    <span className ={styles.alignRight} >{createdAt}</span>
                </div>
            </div>
            <div>
                <img src={blogImage} alt={blogTitle}/>
                <p>{blogContent}</p>
            </div>
        </div>
    )
}

export default BlogContainer;
