import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export const Navbar=()=>{
    const navigate = useNavigate();
    const [cookies,setCookies] = useCookies(["access_token"]);
    const logout = () =>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate('/auth');
    }
    return(
        <div className="navbar">
            <Link to='/'>Home</Link>
            
            <Link to='/create-recipe'>Create Recipe</Link>
            <Link to='/saved-recipes'>Saved Recipies</Link>
            {
            !cookies.access_token ? 
                (<Link to='/auth'>Login/Register</Link>) : ( <button onClick={logout}>Logout</button> )
            }

            
        </div>
    );
}