import AuthService from "../../services/auth.service";
import { LOGIN_SUCCESS } from "./types";

export class AuthAction {
  static login = (data) => (dispatch) => {
    AuthService.login(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { name: "Abdulazeez" },
    });
  };
}
