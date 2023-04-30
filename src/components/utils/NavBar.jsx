import { Link } from "react-router-dom";
import styles from '../../styles/NavBar.module.css'
import { useSelector } from "react-redux";
const NavBar = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return ( <div>
        <nav className="navbar container-center d-flex justify-content-between align-items-center">
        <Link  to= "/" className="">

            <div>
                Designership
            </div>
            </Link>
            {
                isLoggedIn?
               
                <button className={styles.signup+" btn"}>Logout</button>:
                <div className="d-flex">

                <Link  to= "/signup" className="me-2">
                <button className={styles.signup+" btn"}>Sign Up</button>
                </Link>
                <Link to= "/signin">
        
                <button className={styles.signin+" btn"}>Login</button>
        </Link>
                    </div>
            }
          
        </nav>
        
    </div> );
}
 
export default NavBar;