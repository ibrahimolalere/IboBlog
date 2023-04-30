import styles from '../../styles/SignInPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthAction } from '../../redux/actions/auth.action';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form,setForm] = useState({email:"",password:""});
  const { isLoggedIn } = useSelector((state) => state.auth);

useEffect(() => {
  if(isLoggedIn){
  navigate("/blogs");
  }


}, [isLoggedIn])

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(AuthAction.login(form));
  }
  

  return (
    <>
      <div className={styles.container}>
          <div className={styles.loginForm}>
            <div className={styles.formHeader}>
              <div>

              </div>
              <div>
                <h3>Designership</h3>
              </div>
           
            </div>
            <form
              onSubmit={onSubmit}
            >
              <div className={styles.formContent}>
                <div className={styles.emailInput}>
                  <input
                    placeholder="Email"
                    required
                    type="email"
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                  />
                </div>
                <div className={styles.passwordInput}>
                  <input
                    placeholder="Password"
                    required
                    type="password"
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                    }}
                  />
                  <button className={"btn px-1"}>
                    <i className="bx bxs-hide"></i>
                  </button>
                </div>
                
                <div className={styles.loginButton}>
                  <button type="submit">LOGIN</button>
                </div>
                
                <div className={styles.haveAnAccount}>
                  <a href="#"> Already have an account?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
    </>

  );
};

export default SignInPage;
