import Link from "next/link";
import path from "path";
import {FaGithub, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:""},
    {icon: <FaTwitter/>, path:""},
    {icon: <FaLinkedin/>, path:""},
    {icon:<FaYoutube/>, path:""},
]


const Socials = () => {
  return (
    <div className="flex gap-6">
        {socials.map((item, index)=> {
            return(
                <Link href={item.path} key={index} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials