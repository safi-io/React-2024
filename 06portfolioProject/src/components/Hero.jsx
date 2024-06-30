import HeroPic from "../assets/kevinRushProfile.png"
import { HERO_CONTENT } from "../constants";

export default function Hero() {
    return (
        <>
            <div className="flex items-center justify-around h-[90vh]">
                <div className="text">
                    <h1 className="font-extralight text-7xl">Kevin Rush</h1>
                    <p className="bg-gradient-to-r text-4xl mt-16 from-pink-300 to-purple-500 bg-clip-text text-transparent">Full Stack Developer</p>
                    <p className="max-w-[550px] mt-5">{HERO_CONTENT}</p>
                </div>
                <div className="w-[450px]">
                    <img src={HeroPic} alt="" />
                </div>
            </div>
        </>
    );
}