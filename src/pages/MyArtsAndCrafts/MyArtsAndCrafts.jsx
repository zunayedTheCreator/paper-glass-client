import { FaArrowDown } from "react-icons/fa";
import MyItemCard from "../../components/MyItemCard/MyItemCard";

const MyArtsAndCrafts = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">My Arts&Crafts List</h2>
            <div className="border-t-2 w-2/6 border-black mx-auto mb-4"></div>
            <div className="flex justify-center mb-4">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-teal-200">Show <FaArrowDown></FaArrowDown></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-teal-50 rounded-box w-52">
                        <li className="font-semibold"><a>All</a></li>
                        <li className="font-semibold"><a>Customization: Yes</a></li>
                        <li className="font-semibold"><a>Customization: No</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <MyItemCard></MyItemCard>
                <MyItemCard></MyItemCard>
            </div>
        </div>
    );
};

export default MyArtsAndCrafts;