import { useLoaderData } from "react-router-dom";
import ItemsCard from "../../components/ItemsCard/ItemsCard";

const ArtsAndCrafts = () => {
    
    const allItems = useLoaderData();

    return (
        <div>
            <h3 className="font-bold text-3xl text-center">All Arts&Crafts</h3>
            <div className="border-t-2 border-black mx-auto w-2/6 mb-6"></div>
            <div className="w-full xl:w-[1300px] mx-auto grid grid-cols-1 xl:grid-cols-2 px-10 gap-5">
                {
                    allItems.map(item => <ItemsCard item={item} key={item._id}></ItemsCard>)
                }
            </div>
        </div>
    );
};

export default ArtsAndCrafts;