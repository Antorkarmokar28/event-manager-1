import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nabvar from "../components/Navbar/Nabvar";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;