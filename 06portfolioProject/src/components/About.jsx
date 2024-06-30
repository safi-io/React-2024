import aboutLogo from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

export default function About() {
    return(
        <>
        <div className="heading flex items-center justify-center text-3xl">
            <h1>About Me</h1>
        </div>
        
        <div className="flex items-center justify-between h-[75vh] ">
            <div>
                <img src={aboutLogo} alt="" className="rounded-xl w-[400px]"/>
            </div>
            <div>
                <p className="max-w-[550px]">{ABOUT_TEXT}</p>
            </div>
        </div>
        </>
    );
}