import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
    const navigate= useNavigate();
    const {children } = props;
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
      console.log(isLoggedIn)
      if(!isLoggedIn){
        navigate("/signin")
      }
    
    
    }, [isLoggedIn])
    return (<div>

        {children}
    </div>  );
}
 
export default Auth;