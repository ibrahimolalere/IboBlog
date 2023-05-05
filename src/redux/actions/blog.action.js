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
  static createBlog = (data) => async (dispatch) => {
    return await BlogService.createBlog(data).catch((err) => {});
  };
  static updateBlog = (id, data) => async (dispatch) => {
    return await BlogService.updateBlog(id, data).catch((err) => {});
  };
  static deleteBlog = (id) => async (dispatch) => {
    return await BlogService.deleteBlog(id).catch((err) => {});
  };
}
