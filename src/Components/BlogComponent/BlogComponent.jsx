
import styles from'./BlogComponent.module.css'
import BlogContainer from './BlogContainer';
import RelatedLinks from './RelatedLinks';

function BlogComponent(props){
    let {blogId} = props.data
    return(
        <div className={styles.container} id={blogId}>
            <BlogContainer blogData={props.data} />
            <RelatedLinks relatedLinks={props.data.relatedLinks} />
        </div>
    )
}

export default BlogComponent;