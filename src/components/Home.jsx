import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const 


    return ( <div>
        <h1>My Personal Blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, mollitia. Libero soluta perferendis iure eos velit eius magni ipsam molestiae officiis, error explicabo in eum impedit alias placeat ea cupiditate?</p>
        
        <Link to= "/signin">
        <button>Sign in to read</button>
        </Link>


    </div> );
}
 
export default Home;