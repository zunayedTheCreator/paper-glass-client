import { useLoaderData } from "react-router-dom";
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";

const ArtsAndCrafts = () => {
    
    const allItems = useLoaderData();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <h3 className="font-bold text-3xl text-center">All Arts&Crafts</h3>
            <div className="border-t-2 border-black mx-auto w-2/6 mb-6"></div>
            { loading ? (<HashLoader className="mx-auto my-20" color={'#E11D48'} loading={loading} size={50}></HashLoader>) : (
                <div className="w-full xl:w-[1300px] mx-auto grid grid-cols-1 xl:grid-cols-2 px-10 gap-5">
                    {
                        allItems.map(item => <ItemsCard item={item} key={item._id}></ItemsCard>)
                    }
                </div>
            )}
        </div>
    );
};

export default ArtsAndCrafts;