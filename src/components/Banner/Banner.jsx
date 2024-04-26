import banner from "../../../public/images/banner.jpeg"

const Banner = () => {
    return (
        <div>
            <h2 className="text-[50px] md:text-[90px] xl:text-[150px] platypi font-bold absolute text-white bg-[#00000066] rounded-lg px-3 left-0 right-0 mx-auto w-fit mt-[180px]">Arts And Crafts</h2>
            <img className="bg-cover mx-auto lg:w-full xl:w-[1300px] object-cover h-[600px] rounded-lg" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;