import styles from '../../styles/BlogPreview.module.css'
const BlogPreview = ({avatar,title,content}) => {
return(
    <div className={styles.container+"d-flex flex-column justify-content-start"}>
        <div className={styles.blogPreviewImage} style={{backgroundImage:`url("${avatar}")`}}>
        </div>
        <div className={styles.blogTitle}>
            {title}
            </div>
        <div className={styles.blogContent}>
            {content}
        </div>
        {/* <div className={styles.blogFooter+' d-flex'}>
        <div className={styles.authorAvatar}>
        <img src="/logo512.png" alt="" />
        </div>
        <div>
            <div className={styles.authorName}>s</div>
            <div className={styles.dateAdded}>
                <span>Oct 19, 2020</span> . <span>5 min read</span>
            </div>

        </div>
        </div> */}

    </div>
)

  
}
 
export default BlogPreview;