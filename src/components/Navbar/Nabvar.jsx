import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import swal from "sweetalert";

const Nabvar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                swal("Good job!", "Logout successfully", "success");
            })
            .catch()
    }
    const navLinks = <>
        <li>
            <NavLink className='text-sm font-bold' to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className='text-sm font-bold' to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink className='text-sm font-bold' to='/blog'>Blog</NavLink>
        </li>
        <li>
            <NavLink className='text-sm font-bold' to='/contact'>Contact</NavLink>
        </li>
        {
            user &&
            <li>
                <NavLink className='text-sm font-bold' to='/ticket'>Get Ticket</NavLink>
            </li>
        }
    </>
    return (
        <nav className="bg-white font-poppins">
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to='/' className="cursor-pointer text-xl md:text-3xl font-semibold md:font-extrabold ">Evenet <span className="text-blue-900">Manager</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar dropdown dropdown-end">
                                    <div className="w-10 h-10 rounded-full">
                                        <img className="w-full" alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] leading-8 menu py-2 px-4 shadow bg-white rounded-box ">
                                        <Link to="/profile">
                                            Profile
                                        </Link>
                                        <Link onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </ul>
                                </div>
                                :
                                <Link to="/login" className="btn md:text-xl md:font-semibold bg-blue-900 hover:bg-blue-800 text-white">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nabvar;