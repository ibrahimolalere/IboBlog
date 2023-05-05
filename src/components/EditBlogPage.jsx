import BlogForm from "./utils/BlogForm";
import styles from '../styles/EditBlogPage.module.css'
import { BlogAction } from "../redux/actions/blog.action";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const EditBlogPage = () => {
    const dispatch = useDispatch();
    let { blogId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title:"",
        content:""
    });
    const updateBlog = async ()=>{
        await dispatch(BlogAction.updateBlog(blogId,formData));
        navigate("/blogs")
      }
    const fetchSingleBlog = async ()=>{
        const data = await dispatch(BlogAction.fetchSingleBlog(blogId));
  console.log(data)
  ;      setFormData({
    title:data.title,
    content:data.content
  });
      }
  
      useEffect(()=>{
          fetchSingleBlog();
         return;
      },[]);


  

    return ( <div className={styles.container}>
        <div className={styles.formHeader}>
            <h5>
                Edit Blog
            </h5>
        </div>
        <BlogForm buttonTitle={"Update"} formData={formData} onFormInputChanged={(e)=>{
            let o = {};
            o[e.target.name] = e.target.value;
            
            setFormData({
                ...formData,
                ...o,
            })

        }}
        onSubmit={(e)=>{
            e.preventDefault();
            updateBlog();
        }} 
        />
    </div> );
}
 
export default EditBlogPage;