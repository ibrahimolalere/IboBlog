import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "../../redux/actions/auth.action";

const Auth = (props) => {
  const dispatch = useDispatch();

    const navigate= useNavigate();
    const {children } = props;
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(AuthAction.init());
      if(!isLoggedIn){
        navigate("/signin")
      }
    
    
    }, [isLoggedIn])
    return (<div>
        {children}
    </div>  );
}
 
export default Auth;