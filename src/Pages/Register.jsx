import { BookOpen } from 'lucide-react';
import RegisterAnimation from '../../public/Animationlogin.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { Register, UpdateUser, themeToggle } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const { email, password, photoURL, displayName } = Object.fromEntries(fromData.entries());
        setError("");

        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegEx.test(password)) {
            setError("Password must have uppercase, lowercase, and 6+ characters.");
            return;
        }

        const allData = { email, password, photoURL, displayName };

        Register(email, password)
            .then(() => {
                UpdateUser({ displayName, photoURL })
                    .then(() => {
                        navigate("/");
                        Swal.fire({
                            title: "Register Successful!",
                            icon: "success",
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "Profile Update Failed",
                            icon: "error",
                        });
                    });

                fetch("https://assignment-10-server-woad-two.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(allData),
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Account already exists",
                    icon: "error",
                });
            });
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 py-12 max-w-6xl mx-auto">
            {/* Lottie Animation */}
            <div className="w-full lg:w-1/2 hidden md:block">
                <Lottie className="w-full max-w-md mx-auto" animationData={RegisterAnimation} loop />
            </div>

            {/* Register Form */}
            <div className="w-full lg:w-1/2 max-w-md">
                <div className="text-center">
                    <BookOpen size={40} className="text-blue-600 mx-auto" />
                    <h1 className={`text-3xl md:text-4xl font-bold py-3 ${themeToggle === "dark" ? 'text-white' : 'text-[#0a1a2f]'}`}>
                        Create your account
                    </h1>
                    <p className="text-sm font-semibold text-gray-500">
                        Or <Link className="text-blue-500" to="/login">sign in to your existing account</Link>
                    </p>
                </div>
                <div className="w-full lg:w-1/2  md:hidden">
                    <Lottie className="w-full max-w-md mx-auto" animationData={RegisterAnimation} loop />
                </div>

                <div className="mt-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="displayName" placeholder="Enter name" className="input h-11 rounded-full w-full" required />
                        <input type="email" name="email" placeholder="Enter Email" className="input h-11 rounded-full w-full" required />
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input h-11 rounded-full w-full" required />
                        <input type="password" name="password" placeholder="Enter Password" className="input h-11 rounded-full w-full" required />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button type="submit" className="btn h-11 bg-[#362478] text-white rounded-full w-full">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
