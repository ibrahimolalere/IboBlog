import { Link } from "react-router-dom";
import BlogPreview from "./BlogPreview";

const BlogsListView = ({blogs}) => {
    return (<div>
        {blogs.map((el,index)=><Link to={"/blogs/"+el.id} key={'blog-view-'+index}>
            <BlogPreview  name={el.title} author={el.author} content={el.content}/>
        </Link>
        )}
    </div>  );
}
 
export default BlogsListView;