import { NavLink } from "react-router-dom";
import no_user from "../../../public/images/user.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const loggedUser = localStorage.getItem('loggedUser')
    const user1 = JSON.parse(loggedUser);
    const loggedName = user1?.providerData[0].displayName
    const loggedPhoto = user1?.providerData[0].photoURL
    
    const signedUser = localStorage.getItem('signedUser')
    const user2 = JSON.parse(signedUser)
    const signedName = user2?.name
    const signedPhoto = user2?.img

    const navLinks = <>
        <NavLink to={'/'}><li className="font-bold"><a>Home</a></li></NavLink>
        <NavLink to={'/ArtsAndCrafts'}><li className="font-bold"><a>All Arts&Crafts</a></li></NavLink>
        { user1 || user2 ? <NavLink to={'/AddCraftItem'}><li className="font-bold"><a>Add Craft Item</a></li></NavLink> : <></>}
        { user1 || user2 ? <NavLink><li className="font-bold"><a>My Art&Craft List</a></li></NavLink> : <></>}
    </> 

    const handleSignOut = () => {
        localStorage.removeItem('loggedUser')
        localStorage.removeItem('signedUser')
        toast.success('Successfully Logged Out')
        setTimeout(() => { 
            location.reload()
        }, 2000);
    }

    return (
        <div className="navbar bg-base-100 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    
                    {navLinks}

                    <div className="border-t-2 mt-1 mb-2"></div>
                    <label className="swap swap-rotate grid justify-start lg:hidden ml-2">
  
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />
                
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
                    </label>
                </ul>
                </div>
                <a className="btn hover:bg-slate-50 bg-transparent border-none text-xl"><NavLink to={'/'}>Paper Glass</NavLink></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-11 rounded-full mr-3 ring ring-offset-2 ring-teal-400 ml-4">
                        <img src={ user1 || user2 ? loggedPhoto || signedPhoto : no_user } alt={user1 || user2 ? loggedName || signedName : 'None'} />
                    </div>
                </div>
                { user1 || user2 ? 
                    <button onClick={handleSignOut} className="text-white bg-red-600 rounded btn font-bold">SignOut</button> : <div>
                        <NavLink to={'/login'}><a className="btn bg-amber-500 rounded-l rounded-r-none px-6 font-bold text-white border-none">Login</a></NavLink>
                        <NavLink to={'/register'}><a className="btn bg-teal-400 rounded-r rounded-l-none px-6 font-bold text-white border-none">Register</a></NavLink>
                    </div>
                }
                <label className="swap swap-rotate ml-2 hidden lg:grid">
  
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />
                
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
                </label>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;