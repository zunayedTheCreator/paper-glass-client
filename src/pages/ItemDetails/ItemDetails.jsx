import { FaDollarSign, FaRegClock, FaStar, FaUser, FaEnvelope, FaHome } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import MyDynamicTitle from "../../../MyDynamicTitle";
import { Slide } from "react-awesome-reveal";

const ItemDetails = () => {
    MyDynamicTitle('Item Details')
    const item = useLoaderData();
    const {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo, _id} = item;

    return (
        <Slide>
            <div className="hero bg-orange-300 rounded text-black w-full xl:w-[1200px] mx-auto border-l-4 border-b-4 border-teal-500">
                <div className="hero-content gap-10 flex-col lg:flex-row justify-between w-full">
                    <div className="bg-black rounded-lg"><img src={photo} className="w-[400px] h-[300px] object-cover rounded-lg shadow-2xl" /></div>
                    <div className="justify-start lg:w-2/3">
                        <div className="flex items-center mb-4 justify-between">
                            <button className="font-bold border-2 border-b-black border-r-black border-l-teal-400 border-t-teal-400 px-2 py-1 rounded w-fit bg-[#ffffff66] hover:bg-[#ffffff55] hover:border-b-teal-400 hover:border-r-teal-400 hover:border-l-black hover:border-t-black duration-200">{subcategory}</button>
                            <Link to={'/'}><FaHome className="text-2xl"></FaHome></Link>
                        </div>
                        <h1 className="text-5xl font-bold mb-1">{item_name}</h1>
                        <p className="font-semibold mb-2">- {description}</p>
                        <h5 className="font-bold flex items-center border-b-2 border-r-2 border-black py-1"><FaDollarSign className="text-lg"></FaDollarSign> {price}</h5>
                        <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaStar className="text-lg"></FaStar> {rating}</h5>
                        <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaRegClock className="text-lg"></FaRegClock> {process_time}</h5>
                        <div className="mt-2 mb-1">
                            <h2 className="font-bold">Customization: {customization}</h2>
                            <h2 className="font-bold">Stock Statues: {stock_state}</h2>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center mt-2 mb-2">
                            <h2 className="flex items-center font-bold text-lg border-y-2 border-l-2 px-2 border-r-2 md:border-r-0 gap-1"><FaUser className="text-lg"></FaUser>{user_name}</h2>
                            <h2 className="flex items-center font-bold text-lg border-2 px-2 gap-1"><FaEnvelope className="text-xl"></FaEnvelope>{user_email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default ItemDetails;