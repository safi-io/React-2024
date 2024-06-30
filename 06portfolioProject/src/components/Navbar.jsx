import logo from "../assets/kevinRushLogo.png";

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between mt-5 m-auto">
        <div>
          <img src={logo} alt="logo" className="w-10" />
        </div>
        <div className="flex items-center justify-center text-white gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
      </nav>
    </>
  );
}
