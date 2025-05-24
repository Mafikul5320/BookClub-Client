import { BookOpen } from 'lucide-react';
import RegisterAnimation from '../../public/Animationlogin.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { Register, UpdateUser } = use(AuthContext)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const fromData = new FormData(form)
        const { email, password, photoURL, displayName } = Object.fromEntries(fromData.entries())
        setError("")
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!passwordRegEx.test(password) == true) {
            setError("Password must have uppercase , lowercase , and 6 characters long.")
            return;
        }
        const allData = {
            email,
            password,
            photoURL,
            displayName
        }

        Register(email, password).then(() => {
            UpdateUser({
                displayName,
                photoURL
            }).then(() => {
                Swal.fire({
                    title: "Register Successfull!",
                    icon: "success",
                    draggable: true
                });
            }).catch(()=>{
                Swal.fire({
                title: "Register Failed",
                icon: "error",
                draggable: true
            });
            })
            fetch("https://assignment-10-server-woad-two.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(allData),
                // …
            }).then(res => res.json()).then(data => console.log(data))
            console.log(allData)
        }).catch(() => {
             Swal.fire({
                title: "Already create account",
                icon: "error",
                draggable: true
            });
        })

    }
    return (
        <div className='flex justify-center my-30 mx-auto'>

            <Lottie className='w-130' animationData={RegisterAnimation} loop={true} />

            <div className='  py-6'>
                <span className='flex justify-center'><BookOpen size={40} className='text-blue-600' /></span>
                <h1 className=' text-4xl py-3 font-bold text-[#0a1a2f] text-center'>Create your account</h1>
                <p className='text-center text-sm font-semibold text-gray-400'>Or <Link className='text-blue-500' to={"/login"}>sign in to your existing account</Link></p>
                <div className='my-8  w-1/2 mx-auto'>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <input type="text" name='displayName' placeholder="Enter name" className="input h-11 rounded-full  w-full" required />
                        <input type="email" name='email' placeholder="Enter Email" className="input h-11 rounded-full  w-full" required />
                        <input type="text" name='photoURL' placeholder="Photo URL" className="input h-11 rounded-full  w-full" required />
                        <input type="password" name='password' placeholder="Enter Password" className="input h-11 rounded-full  w-full" required />
                        <p className='text-red-500'>{error}</p>
                        <button className='btn h-11  bg-[#362478] text-white rounded-full  w-full' type='submit'>Register</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;