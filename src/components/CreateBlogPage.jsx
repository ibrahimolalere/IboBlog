import BlogForm from "./utils/BlogForm";
import styles from '../styles/CreateBlogPage.module.css'
import { BlogAction } from "../redux/actions/blog.action";

import { useState } from "react";
import { useDispatch } from "react-redux";
const CreateBlogPage = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title:"",
        content:""
    })
    const createBlog = async ()=>{
        await dispatch(BlogAction.createBlog(formData));
      }
    return ( <div className={styles.container}>
        <div className={styles.formHeader}>
            <h5>
                Create New Blog
            </h5>
        </div>
        <BlogForm buttonTitle={"Create"} formData={formData} onFormInputChanged={(e)=>{
            let o = {};
            o[e.target.name] = e.target.value;
            
            setFormData({
                ...formData,
                ...o,
            })

        }}
        onSubmit={(e)=>{
            e.preventDefault();
createBlog()          
        }} 
        />
    </div> );
}
 
export default CreateBlogPage;