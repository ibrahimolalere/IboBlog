import BlogForm from "./utils/BlogForm";
import styles from '../styles/EditBlogPage.module.css'
import { BlogAction } from "../redux/actions/blog.action";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const EditBlogPage = () => {
    const dispatch = useDispatch();
    let { blogId } = useParams();


    const [formData, setFormData] = useState({
        title:"",
        content:""
    })
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

    const updateBlog = async (data)=>{
        await dispatch(BlogAction.updateBlog(blogId,data));
      }
  

    return ( <div className={styles.container}>
        <div className={styles.formHeader}>
            <h5>
                Edit Form
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
            updateBlog(formData);
        }} 
        />
    </div> );
}
 
export default EditBlogPage;