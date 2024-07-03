import { Link } from "react-router-dom";
import brand_logo from "../assets/brand_logo.png"
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between max-w-[90%] m-auto mt-5 font-customFont">
            <div>
            <Link to={"/"}><img src={brand_logo} alt="logo" /></Link>
                
            </div>
            <div>
                <ul className="flex items-center justify-center gap-3 font-medium">
                    <a href=""><li>MENU</li></a>
                    <a href=""><li>LOCATION</li></a>
                    <a href=""><li>ABOUT</li></a>
                    <a href=""><li>CONTACT</li></a>
                </ul>
            </div>
            <div>
                <button className="bg-[#D01C28] text-white p-2 px-4">
                    <Link to={"/login"}>Login</Link>
                </button>
            </div>
        </nav>
    );
}