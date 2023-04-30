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


    return ( <div className="hero-container ">
      <div className="container-center">

      <div className="hero mx-auto text-center">

        <h1 className="fs-1 fw-bold">My Personal Blog</h1>
        <p>
        A subheading that addresses the what, the why we should care and hopefully some social proof.
        </p>
      </div>
      </div>
        
      { isLoggedIn?<BlogsListView blogs={blogs}/>: 
      <div className="mx-auto w-ft">

      <Link  to= "/signin">
        <button className="btn btn-primary">Sign in to read</button>
        </Link>
      </div>
        }


    </div> );
}
 
export default Home;