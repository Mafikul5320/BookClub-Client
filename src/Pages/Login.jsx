import React, { use } from 'react';
import LoginAnimation from '../../public/AnimationLoginAnimation.json';
import Lottie from 'lottie-react';
import { BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const { SignIn, SignInGoogle, themeToggle } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const { email, password } = Object.fromEntries(fromData.entries());

        SignIn(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Login!",
                    showConfirmButton: false,
                    timer: 1700,
                });
            });
    };

    const handelGoogleLogin = () => {
        SignInGoogle(provider)
            .then(() => {
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Login!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 px-4 py-12 max-w-6xl mx-auto">
            {/* Animation */}
            <div className="w-full lg:w-1/2 hidden md:block">
                <Lottie className="w-full" animationData={LoginAnimation} loop={true} />
            </div>

            {/* Login Form */}
            <div className="w-full lg:w-1/2 max-w-md">
                <div className="text-center">
                    <BookOpen size={40} className="text-blue-600 mx-auto" />
                    <h1 className={`text-3xl md:text-4xl font-bold  ${themeToggle === "dark" ? 'text-white' : 'text-[#0a1a2f]'}`}>
                        Sign in to your account
                    </h1>
                    <p className="text-sm font-semibold text-gray-500 py-3">
                        Or <Link className="text-blue-500" to="/register">create a new account</Link>
                    </p>
                </div>
                <div className="w-full lg:w-1/2 md:hidden">
                    <Lottie className="w-full" animationData={LoginAnimation} loop={true} />
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="email" name="email" placeholder="Enter Email" className="input h-11 rounded-full w-full" required />
                        <input type="password" name="password" placeholder="Enter Password" className="input h-11 rounded-full w-full" required />
                        <button type="submit" className="btn h-11 bg-[#362478] text-white rounded-full w-full">
                            Login
                        </button>
                    </form>

                    <div className="my-6">
                        <fieldset className="border-t border-gray-300">
                            <legend className="text-center px-2 text-gray-500 text-sm">Or continue with</legend>
                        </fieldset>
                        <button
                            onClick={handelGoogleLogin}
                            className="btn my-3 h-11 rounded-full w-full bg-white text-black border border-[#362478]"
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            <span className="ml-2">Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
