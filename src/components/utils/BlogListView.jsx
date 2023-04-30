import { Link } from "react-router-dom";
import styles from '../../styles/BlogListView.module.css'
import BlogPreview from "./BlogPreview";

const BlogsListView = ({blogs}) => {
    return (<div className={styles.container+" container container-center px-0"}>
        <div className="row gy-4">

        {blogs.map((el,index)=><Link className="col-4" to={"/blogs/"+el.id} key={'blog-view-'+index}>
            
            <BlogPreview  title={el.title} avatar={el.avatar} content={el.content}/>
        </Link>
        )}
        </div>
    </div>  );
}
 
export default BlogsListView;