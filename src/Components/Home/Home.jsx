import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <Navbar></Navbar>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;