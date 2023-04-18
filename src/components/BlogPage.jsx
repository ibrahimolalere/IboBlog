import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlogAction } from "../redux/actions/blog.action";
import { useParams } from "react-router-dom";

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
         <div>
        <h1>Blog</h1>
        <div>

        <div>{blog.title}</div>
        <div>{blog.content}</div>
        <div>{blog.author}</div>
        </div>
    </div>
     );
}
 
export default BlogPage;