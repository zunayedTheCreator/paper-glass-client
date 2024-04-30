import { Fade } from "react-awesome-reveal";
import { FaDollarSign, FaRegClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryItemsCard = ({item}) => {

    const {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo, _id} = item;

    return (
        <Fade>
            <div className="hero bg-orange-300 rounded text-black w-full xl:w-[1200px] mx-auto border-l-4 border-b-4 border-teal-500 mb-4">
                <div className="hero-content gap-10 flex-col lg:flex-row justify-between w-full">
                    <div className="bg-black rounded-lg"><img src={photo} className="w-[400px] h-[300px] object-cover rounded-lg shadow-2xl" /></div>
                    <div className="justify-start lg:w-2/3">
                        <div className="flex items-center mb-4 justify-between">
                            <h1 className="font-bold border-2 border-b-black border-r-black border-l-teal-400 border-t-teal-400 px-2 py-1 rounded w-fit bg-[#ffffff66]">{subcategory}</h1>
                            <Link to={`/item/${_id}`}><button className="btn rounded-md bg-teal-300 font-bold border-none">View</button></Link>
                        </div>
                        <h1 className="text-5xl font-bold mb-1">{item_name}</h1>
                        <p className="font-semibold mb-2">- {description}</p>
                        <h5 className="font-bold flex items-center border-b-2 border-r-2 border-black py-1"><FaDollarSign className="text-lg"></FaDollarSign> {price}</h5>
                        <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaStar className="text-lg"></FaStar> {rating}</h5>
                        <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaRegClock className="text-lg"></FaRegClock> {process_time}</h5>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default CategoryItemsCard;