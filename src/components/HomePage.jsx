import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogAction } from "../redux/actions/blog.action";
import BlogsListView from "./utils/BlogListView";

const Home = () => {
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState([]);
    const { isLoggedIn } = useSelector((state) => state.auth);

    const fetchBlogs = async ()=>{
        const data = await dispatch(BlogAction.fetchBlogs());
     setBlogs(data);
      }
  
      useEffect(()=>{
         fetchBlogs();
      },[]); 


    return ( <div>
        <h1>My Personal Blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, mollitia. Libero soluta perferendis iure eos velit eius magni ipsam molestiae officiis, error explicabo in eum impedit alias placeat ea cupiditate?</p>
        
      { isLoggedIn?<BlogsListView blogs={blogs}/>: <Link to= "/signin">
        <button>Sign in to read</button>
        </Link>}


    </div> );
}
 
export default Home;