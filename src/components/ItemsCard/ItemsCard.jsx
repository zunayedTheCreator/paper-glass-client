import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemsCard = ({item}) => {

    const {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo, _id} = item;

    return (
        <div className="card card-side bg-base-100 w-[600px] h-[320px] shadow-xl rounded border text-black item">
        <figure className="w-2/5 bg-black"><img src={photo} alt="Movie"/></figure>
        <div className="card-body gap-0 w-3/5 bg-orange-300">
            <div className="flex items-center justify-between">
                <h2 className="card-title font-bold mb-1">{item_name}</h2>
                <Link to={`/item/${_id}`}><button className=" font-bold border-2 border-teal-700 px-2 rounded hover:bg-teal-400 hover:text-white duration-200">View</button></Link>
            </div>
            <div className="border-t-2 border-black mb-3"></div>
            <h5 className="font-bold flex items-center border-b-2 border-r-2 border-black py-1"><FaDollarSign className="text-lg"></FaDollarSign> {price}</h5>
            <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaStar className="text-lg"></FaStar> {rating}</h5>
            <h5 className="font-bold flex items-center gap-1 border-b-2 border-r-2 border-black py-1"><FaRegClock className="text-lg"></FaRegClock> {process_time}</h5>
            <h4 className="font-bold mt-4 mb-2">Email: {user_email}</h4>
            <div className="card-actions justify-between items-center">
                <h3 className="font-bold border-2 border-b-black border-r-black border-l-teal-400 border-t-teal-400 px-2 py-1 rounded">{subcategory}</h3>
            </div>
        </div>
        </div>
    );
};

export default ItemsCard;