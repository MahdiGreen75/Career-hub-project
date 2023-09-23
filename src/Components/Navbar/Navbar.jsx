import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-4 outline-none">
                <h1 className="text-xl font-bold">CareerHub</h1>
                <div id="navbar">
                    <ul className="flex gap-8 items-center text-xs font-semibold text-gray-500">
                        <NavLink to="/">Statistics</NavLink>
                        <NavLink to="/AppliedJobs">Applied Jobs</NavLink>
                        <NavLink to="/Blog">Blogs</NavLink>
                    </ul>
                </div>
                <Link><button className="
             text-white text-xs font-bold
             px-4 py-2 rounded-sm 
            bg-gradient-to-r 
            from-[#7E90FE]
            to-[#9873FF]">Start Apllying</button></Link>
            </div>
        </div>
    );
};

export default Navbar;