import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='loginBg h-[790px] md:h-[600px] rounded-3xl mb-16 mt-8'>
           <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='md:w-2/3 mt-5 md:mt-0 mb-6 md:mb-0'>
                    <div>
                        <form className="blurBg w-[340px] h-[450px] border-[#00000066] border-2 mx-auto rounded-3xl py-4 px-3 animate__animated animate__fadeInLeft">
                            <h3 className="text-black text-4xl font-bold text-center">Login</h3>
                            <div className="border-t-2 border-black mx-auto w-1/2 mt-2 mb-[40px]"></div>
                            <input type="email" placeholder="Your Email" name="email" className="input-md w-full max-w-xs blurBg border-2 border-white text-white font-medium rounded-2xl placeholder-b mb-6" required/>
                            <div className="border-white border-2 flex items-center rounded-2xl pr-2 mb-6">
                                <input type={isToggled ? 'text' : 'password'} placeholder="Password" name="password" className="input-md w-full max-w-xs blurBg rounded-2xl text-white font-medium placeholder-b" required/>
                                <h2>{isToggled ? <FaEyeSlash className="text-black" onClick={handleToggleClick}></FaEyeSlash> : <FaEye onClick={handleToggleClick} className="text-black"></FaEye>}</h2>
                            </div>
                            <div className="border-t-2 border-white mx-auto w-2/3 mt-2 mb-4"></div>
                            <div className="mb-4 flex items-center gap-3 justify-center">
                                <FaGoogle  className="text-[50px] py-2 w-[80px] rounded-lg border-2 hover:bg-white hover:text-black text-white duration-200 cursor-pointer"></FaGoogle>
                                <FaGithub className="text-[50px] py-2 w-[80px] rounded-lg border-2 hover:bg-white hover:text-black text-white duration-200 cursor-pointer"></FaGithub>
                            </div>
                            <div className="border-t-2 border-white mx-auto w-2/3 mt-2 mb-[20px]"></div>
                            <div className="text-center">
                                <button className="bg-cyan-200 btn px-16 font-bold border-none">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-[300px] md:h-[600px] rounded-b-3xl md:rounded-r-3xl bg-rose-400 flex flex-col justify-center'>
                    <h3 className="text-4xl font-bold text-center text-black">New Here?</h3>
                    <div className="border-t-2 border-black mx-auto w-2/3 mt-2 mb-[12px] animate__animated animate__heartBeat"></div>
                    <h3 className="text-xl font-bold text-center text-black mb-4">Register and explore <br /> all the good deals faster.</h3>
                    <div className="text-center">
                        <NavLink to={'/register'}><button className="btn px-6 rounded-full bg-white border-2 border-black font-bold">Register Now</button></NavLink>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;