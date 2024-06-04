import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const { register } = useContext(AuthContext);
    const [showPassword, setShowPassord] = useState(false)
    const [conditionMessage, setConditionMessage] = useState('');
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checked = e.target.terms.checked;
        if (password.length < 6) {
            swal("Opps!", "You should must be minimum 6 character password need", "error");
            return;
        }
        if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            swal("Opps!", "Please make your strong password", "error");
            return
        }
        if (!checked) {
            setConditionMessage('Please accepted our terms and conditions')
            return;
        }
        register(email, password)
            .then(() => {
                swal("Good job!", "Register Successfully", "success");
                e.target.reset();
                navigate("/");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => { })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch((error) => {
                swal("Opps!", error.message, "error")
            })
    }
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="px-5">
                <div className="w-full lg:w-[752px] mx-auto mt-24 bg-[#F3F3F3] md:px-20 py-12 px-2 md:py-20 rounded">
                    <h3 className="text-2xl md:text-4xl text-center font-semibold mb-12">Register your account</h3>
                    <hr className="mb-12" />
                    <form onSubmit={handleSignUp}>
                        <label className="text-xl font-semibold" htmlFor="name-id">Your Name</label>
                        <input
                            className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                            type="text"
                            placeholder="Enter your name"
                            id="name-id"
                            name="name"
                            required
                        />
                        <label className="text-xl mt-6 block font-semibold" htmlFor="photo-id">Photo URL</label>
                        <input
                            className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                            type="text"
                            placeholder="Enter photo url"
                            id="photo-id"
                            name="photo"
                            required
                        />
                        <label className="text-xl mt-6 block font-semibold" htmlFor="email-id">Email</label>
                        <input
                            className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                            type="email"
                            placeholder="Enter your email"
                            id="email-id"
                            name="email"
                            required
                        />
                        <label className="text-xl mt-6 block font-semibold" htmlFor="password-id">Password</label>
                        <div className="relative">
                            <input
                                className="block w-full mt-4 bg-[#F3F3F3] px-5 py-5 rounded"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                id="password-id"
                                name="password"
                                required
                            />
                            <span onClick={() => { setShowPassord(!showPassword) }} className="absolute top-6 right-6">
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                        </div>
                        <input
                            className="mt-6"
                            type="checkbox"
                            name="terms"
                            id="check"
                        />
                        <label className="font-semibold text-sm ml-3" htmlFor="check">Accept Term & Conditions</label>
                        <p className="text-red-600 text-sm mt-3 font-semibold">
                            {conditionMessage}
                        </p>
                        <input
                            className="bg-blue-900 cursor-pointer text-white text-center text-xl font-semibold block w-full mt-7 py-4 rounded" type="submit"
                            value={'Register'}
                        />
                    </form>
                    <p className="mt-12 text-center">Do you have an account?<Link to='/login' className="text-highLights-linear font-semibold text-blue-900">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;