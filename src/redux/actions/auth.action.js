import AuthService from "../../services/auth.service";
import { LOGIN_SUCCESS, LOGOUT } from "./types";

export class AuthAction {
  static init = () => (dispatch) => {
    const user = AuthService.getAuthUser();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  };
  static login = (data) => (dispatch) => {
    AuthService.login({ email: data.email });
    console.log({ email: data.email });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { email: data.email },
    });
  };
  static logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
      type: LOGOUT,
    });
  };
}
