export default class AuthService {
  static login = (data) => {
    localStorage.setItem("blog_user", JSON.stringify(data));
  };
  static logout = () => {
    localStorage.removeItem("blog_user");
  };
  static getAuthUser = () => {
    const userString = localStorage.getItem("blog_user");

    return userString ? JSON.parse(userString) : null;
  };
}
