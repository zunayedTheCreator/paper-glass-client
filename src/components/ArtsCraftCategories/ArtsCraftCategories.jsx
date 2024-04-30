import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { RingLoader } from "react-spinners";

const ArtsCraftCategories = () => {
    
    const [categories, setCategories] = useState([])

    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => {
        setCategories(data)
        return;
    })

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold text-center">All Arts&Craft Categories</h2>
            <div className="border-t-2 w-2/6 border-black mx-auto mb-8"></div>
            { loading ? (<RingLoader className="mx-auto my-10" color={'#E11D48'} loading={loading} size={80} />) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full xl:w-[1300px] px-0 lg:px-[150px] xl:px-[290px] mx-auto">
                    {
                        categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                    }
                </div>
            )}
        </div>
    );
};

export default ArtsCraftCategories;