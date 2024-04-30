import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Slide } from "react-awesome-reveal";
import MyDynamicTitle from "../../../MyDynamicTitle";

const Register = () => {
    MyDynamicTitle('Register')
    const [isToggled, setIsToggled] = useState(false);

    const {createUser} = useContext(AuthContext)

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
    };

    const navigate = useNavigate();

    const handleCreateUser = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        if (passwordRegex.test(password)) {

            console.log(name, email, img, password);
            createUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = {name, email, img, password};
                fetch('https://paper-glass-server.vercel.app/user', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Registration successful')
                    }
                })
            })
            .catch(error => {
                console.error(error);
            })
            navigate('/login')
        }
        else{
            toast.error('Password must have at least 1 upper and lower case and also must be longer than 6 characters');
        }
    }

    return (
        <div className='loginBg h-[790px] md:h-[600px] rounded-3xl mb-16 mt-8'>
           <div className='flex flex-col md:flex-row items-center justify-between'>
           <div className='md:w-2/3 mt-5 md:mt-0 mb-6 md:mb-0'>
                    <div>
                        <Slide>
                            <form onSubmit={handleCreateUser} className="blurBg w-[340px] h-[450px] border-[#00000066] border-2 mx-auto rounded-3xl py-4 px-3 animate__animated animate__fadeInLeft">
                                <h3 className="text-[#000000] text-4xl font-bold text-center">Register</h3>
                                <div className="border-t-2 border-black mx-auto w-1/2 mt-2 mb-[20px]"></div>
                                <input type="text" placeholder="Your Name" name="name" className="input-md w-full max-w-xs blurBg border-2 border-white text-black font-medium rounded-2xl placeholder-b mb-4" required/>
                                <input type="email" placeholder="Your Email" name="email" className="input-md w-full max-w-xs blurBg border-2 border-white text-black font-medium rounded-2xl placeholder-b mb-4" required/>
                                <input type="text" placeholder="Image Link" name="img" className="input-md w-full max-w-xs blurBg border-2 border-white text-black font-medium rounded-2xl placeholder-b mb-4" required/>
                                <div className="border-white border-2 flex items-center rounded-2xl pr-2 mb-6">
                                    <input type={isToggled ? 'text' : 'password'} placeholder="Password" name="password" className="input-md w-full max-w-xs blurBg rounded-2xl text-black font-medium placeholder-b" required/>
                                    <h2>{isToggled ? <FaEyeSlash className="text-black" onClick={handleToggleClick}></FaEyeSlash> : <FaEye className="text-black" onClick={handleToggleClick}></FaEye>}</h2>
                                </div>
                                <div className="text-center">
                                    <button className="bg-cyan-200 btn px-16 font-bold border-none">Register</button>
                                </div>
                            </form>
                        </Slide>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-[300px] md:h-[600px] rounded-b-3xl md:rounded-r-3xl bg-rose-400 flex flex-col justify-center'>
                    <h3 className="text-4xl font-bold text-center text-black">A Member?</h3>
                    <div className="border-t-2 border-black mx-auto w-2/3 mt-2 mb-[12px] animate__animated animate__heartBeat"></div>
                    <h3 className="text-xl font-bold text-center text-black mb-4">Login and explore <br /> all the good deals faster.</h3>
                    <div className="text-center">
                        <NavLink to={'/login'}><button className="btn px-6 rounded-full bg-white border-2 border-black font-bold">Login Now</button></NavLink>
                    </div>
                </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default Register;