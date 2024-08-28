import { useContext, useState } from "react";
import { SWIGGY_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStstus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Button from "./Button";
import NewButton from "./NewButton";

const Header = () =>{

    // const buttonClicked = ()=>{
    //     setOldButton(<NewButton/>)
    // }

    // const [oldButton, setOldButton]  = useState(<Button onClick ={buttonClicked}/>)


    const [loginBtn,setloginBtn] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const user = useContext(UserContext);
    //console.log(user)
    // or 
    // const {loggedInUser} = useContext(UserContext)


    // subscribing to store using selector

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        <div className="flex justify-between m-2 bg-yellow-100 shadow-md">
           <Link to={"/"} className="links"><img className="w-24"   src = {SWIGGY_LOGO_URL} alt="Logo" /></Link> 
            <div className="m-5 items-center">
                <ul className="flex">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
                    <li> <Link to={"/"} className="m-5 p-5 hover:underline "> Home </Link></li>
                    <li> <Link to={"/about"} className="m-5 p-5 hover:underline " > About Us </Link></li>
                    <li> <Link to={"/contact"} className="m-5 p-5 hover:underline" > Contact Us </Link> </li>
                    <li> <Link to={"/grocery"} className="m-5 p-5 hover:underline" > Grocery Store </Link></li>
                    <li> <Link to={"/cart"} className="m-5 p-5 hover:underline " > Cart ({cartItems.length}) </Link></li>
                    <button className="bg-yellow-200 rounded-md px-5 py-1" onClick={() =>{
                      loginBtn === "Login" ?  
                      setloginBtn("Logout") : 
                      setloginBtn("Login") 
                    }}>{loginBtn}</button>
                    {/* <li>{user.loggedInUser}</li> */}
                    {/* {oldButton} */}
                </ul>
            </div>
        </div>
    )
}

export default Header;