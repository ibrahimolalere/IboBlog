import AuthService from "../../services/auth.service";
import BlogService from "../../services/blog.service";
import { LOGIN_SUCCESS } from "./types";

export class BlogAction {
  static fetchBlogs = () => async (dispatch) => {
    return await BlogService.fetchBlogs().catch((err) => {});
  };
  static fetchSingleBlog = (id) => async (dispatch) => {
    return await BlogService.fetchSingleBlog(id).catch((err) => {});
  };
}
