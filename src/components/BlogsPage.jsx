import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlogAction } from "../redux/actions/blog.action";
import BlogsListView from "./utils/BlogListView";

const BlogsPage = () => {
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState([]);
    const fetchBlogs = async ()=>{
      const data = await dispatch(BlogAction.fetchBlogs());
console.log(data)
;      setBlogs(data);
    }

    useEffect(()=>{
       fetchBlogs();
       return;
    },[]);
    return (
         <div className="py-4">
          
        <BlogsListView blogs={blogs}/>
    </div>
     );
}
 
export default BlogsPage;