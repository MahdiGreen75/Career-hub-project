import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div>
            <div className="flex items-center space-between">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-4xl">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                    <span className="text-xs text-gray-500 w-[70%]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</span>
                    <Link><button className="
                 text-white text-xs font-bold
                   px-4 py-2 rounded-sm 
                   bg-gradient-to-r 
                 from-[#7E90FE]
                 to-[#9873FF]">Get Started </button></Link>
                </div>
                <div className="flex justify-end">
                    <img src={bannerImg} className="mr-[-60px]"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;