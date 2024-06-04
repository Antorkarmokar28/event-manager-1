import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import swal from "sweetalert";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassord] = useState(false);
    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
            .then(() => {
                swal("Good job!", "Login succesfull", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                swal("Opps!", error.message, "error");
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate("/")
            })
            .catch()
    }
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="px-5">
                <div className="w-full lg:w-[752px] mx-auto mt-24 bg-[#F3F3F3] md:px-20 py-12 px-2 md:py-20 rounded">
                    <h3 className="text-2xl md:text-4xl text-center font-semibold mb-12">Login your account</h3>
                    <hr className="mb-12" />
                    <form onSubmit={handleLogin}>
                        <label className="text-xl mt-6 block font-semibold" htmlFor="email-id">Email</label>
                        <input
                            className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                            type="email"
                            placeholder="Enter your email"
                            id="email-id"
                            name="email"
                        />
                        <label className="text-xl mt-6 block font-semibold" htmlFor="password-id">Password</label>
                        <div className="relative">
                            <input
                                className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password" id="password-id" name="password"
                            />
                            <span onClick={() => { setShowPassord(!showPassword) }} className="absolute top-6 right-6">
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                        </div>
                        <input className="bg-blue-900 text-white text-center text-xl cursor-pointer font-semibold block w-full mt-7 py-4 rounded" type="submit" value={'Login'} />
                    </form>
                    <p className="mt-12 text-center">Do not you have an account?<Link to='/register' className="text-highLights-linear font-semibold text-blue-900">Register</Link></p>
                    <h3 className="text-xl text-center font-semibold mt-10">Login with</h3>
                    <div className="flex justify-center mt-6">
                        <div className="w-14 h-14 border bg-white rounded-full flex justify-center items-center">
                            <button onClick={handleGoogleSignIn}><FaGoogle className="text-blue-900 font-bold" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;