import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {

    const {categoty_name, img} = category;

    return (
        <Link to={`/Subcategory/${categoty_name}`}>
            <div className="text-center w-fit bg-teal-400 rounded-2xl mx-auto xl:mx-0 hover:bg-teal-200 duration-200 text-black">
                <img className="w-[340px] h-[250px] object-cover rounded-t-2xl" src={img} alt="" />
                <h3 className="text-lg font-bold py-2">{categoty_name}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;