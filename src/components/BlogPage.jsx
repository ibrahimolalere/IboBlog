import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlogAction } from "../redux/actions/blog.action";
import { Link, useParams } from "react-router-dom";
import styles from '../styles/BlogPage.module.css'

const BlogPage = () => {
    const dispatch = useDispatch();
    let { blogId } = useParams();

    const [blog,setBlog] = useState({});

    const fetchSingleBlog = async ()=>{
      const data = await dispatch(BlogAction.fetchSingleBlog(blogId));
console.log(data)
;      setBlog(data);
    }

    useEffect(()=>{
        fetchSingleBlog();
       return;
    },[]);
    return (
        <div className={styles.container}>
            <div className={styles.avatar} style={{backgroundImage:`url("${blog.avatar}")`}}>
            </div>
            <div className={styles.body}>
                <div className={styles.title}><h5>
                {blog.title}
                    </h5></div>
                <div className={styles.content}><p>{blog.content}
                    </p></div>

            </div>
            <div className={styles.footer}>
            <div> 
            <Link to={'/blogs/'+blog.id+'/edit'}>
                <button className={styles.editButton+" btn me-2"}>Edit</button></Link>  <button className={styles.deleteButton+" btn"}>Delete Post</button></div>
            </div>
        </div>
    )
   
}
 
export default BlogPage;