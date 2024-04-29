import { FaDollarSign, FaStar, FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyItemCard = () => {
    return (
        <div className="hero bg-orange-300 rounded text-black w-full xl:w-[1200px] mx-auto border-l-4 border-b-4 border-teal-500">
        <div className="hero-content gap-10 flex-col lg:flex-row justify-between w-full">
            <div className="bg-black rounded-lg"><img src="" className="w-[400px] h-[300px] object-cover rounded-lg shadow-2xl" /></div>
            <div className="justify-start lg:w-2/3">
                <div className="flex items-center mb-4 justify-between">
                    <button className="font-bold border-2 border-b-black border-r-black border-l-teal-400 border-t-teal-400 px-2 py-1 rounded w-fit bg-[#ffffff66] hover:bg-[#ffffff55] hover:border-b-teal-400 hover:border-r-teal-400 hover:border-l-black hover:border-t-black duration-200">Glass</button>
                    <div className="flex items-center gap-2">
                        <Link><FaPen className="text-4xl bg-green-400 p-2 rounded-md hover:bg-green-300 duration-200"></FaPen></Link>
                        <FaRegTrashAlt className="text-4xl bg-red-500 p-2 rounded-md hover:bg-red-400 duration-200 cursor-pointer"></FaRegTrashAlt>
                    </div>
                </div>
                <h1 className="text-5xl font-bold mb-4">glass ball</h1>
                <h5 className="font-bold flex items-center border-b-2 border-r-2 border-black py-1"><FaDollarSign className="text-lg"></FaDollarSign> hgjh</h5>
                <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaStar className="text-lg"></FaStar> jkh</h5>
                <div className="mt-4 mb-1">
                    <h2 className="font-bold mb-1">Customization: </h2>
                    <h2 className="font-bold">Stock Statues: </h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyItemCard;