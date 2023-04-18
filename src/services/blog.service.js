import api from "../axios/api";
export default class BlogService {
  static fetchBlogs = async () => {
    return await api
      .get("/blogs")
      .then((data) => data.data)
      .catch((err) => {});
  };
  static fetchSingleBlog = async (id) => {
    return await api
      .get(`/blogs/${id}`)
      .then((data) => data.data)
      .catch((err) => {});
  };
  static deleteBlog = async (id) => {
    return await api
      .delete(`/blogs/${id}`)
      .then((data) => data.data)
      .catch((err) => {});
  };
  static updateBlog = async (id, data) => {
    return await api
      .put(`/blogs/${id}`, data)
      .then((data) => data.data)
      .catch((err) => {});
  };
  static createBlog = async (data) => {
    return await api
      .put(`/blogs`, data)
      .then((data) => data.data)
      .catch((err) => {});
  };
}
