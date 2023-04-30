import NavBar from "../utils/NavBar";


const Default = (props) => {
    const {children } = props;

    return (<div>
<NavBar/>
        {children}
    </div>  );
}
 
export default Default;