import { useLoaderData } from "react-router-dom";
import CategoryItemsCard from "../../components/CategoryItemsCard/CategoryItemsCard";

const SubcategoryItem = () => {

    const items = useLoaderData();

    return (
        <div>
            {items.length === 0 ? <h2 className="text-4xl font-bold text-red-600 text-center py-14">No Item Available</h2> : <></>}
            {
                items.map(item => <CategoryItemsCard key={item._id} item={item}></CategoryItemsCard>)
            }
        </div>
    );
};

export default SubcategoryItem;