import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import MostValue from "../../components/MostValue/MostValue";
import MostUnique from "../../components/MostUnique/MostUnique";
import MyDynamicTitle from "../../../MyDynamicTitle";
import ArtsCraftCategories from "../../components/ArtsCraftCategories/ArtsCraftCategories";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const Home = () => {
    MyDynamicTitle('Home')
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
            <Banner></Banner>
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-2">Craft Items</h1>
                <div className="border-t-2 w-2/6 border-black mx-auto mb-8"></div>
                { loading ? (<HashLoader className="mx-auto my-20" color={'#E11D48'} loading={loading} size={50}></HashLoader>) : (<div className="w-full xl:w-[1300px] mx-auto grid grid-cols-1 xl:grid-cols-2 xl:px-10 gap-5">
                    {
                        items.map(item => <ItemsCard item={item} key={item._id}></ItemsCard>)
                    }
                </div>)}
            </div>
            <ArtsCraftCategories></ArtsCraftCategories>
            <MostValue></MostValue>
            <MostUnique></MostUnique>
        </div>
    );
};

export default Home;