import { useLoaderData } from "react-router-dom";
import CategoryItemsCard from "../../components/CategoryItemsCard/CategoryItemsCard";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";

const SubcategoryItem = () => {

    const items = useLoaderData();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            { loading ? (<HashLoader className="mx-auto my-20" color={'#E11D48'} loading={loading} size={50}></HashLoader>) : (<div>
                {items.length === 0 ? <h2 className="text-4xl font-bold text-red-600 text-center py-14">No Item Available</h2> : <></>}
                {
                    items.map(item => <CategoryItemsCard key={item._id} item={item}></CategoryItemsCard>)
                }
            </div>)}
        </div>
    );
};

export default SubcategoryItem;