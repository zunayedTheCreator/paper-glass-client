import { Fade } from "react-awesome-reveal";
import banner1 from "../../../public/images/banner1.jpeg"
import banner2 from "../../../public/images/banner2.jpg"
import banner3 from "../../../public/images/banner3.jpg"
import banner4 from "../../../public/images/banner4.jpg"

const Banner = () => {
    return (
        <Fade>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img className="bg-cover mx-auto lg:w-full xl:w-[1300px] object-cover h-[600px] rounded-lg" src={banner1} alt="banner" />
                    <h2 className="text-[30px] md:text-[70px] xl:text-[100px] platypi font-bold absolute text-white bg-[#00000066] rounded-lg px-3 left-0 right-0 mx-auto w-fit mt-[180px] text-center">Glass Dying & Staining</h2>
                    <div className="lg:w-full xl:w-[1300px] px-6 mx-auto absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[470px]">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img className="bg-cover mx-auto lg:w-full xl:w-[1300px] object-cover h-[600px] rounded-lg" src={banner2} alt="banner" />
                    <h2 className="text-[50px] md:text-[90px] xl:text-[150px] platypi font-bold absolute text-white bg-[#00000066] rounded-lg px-3 left-0 right-0 mx-auto w-fit mt-[180px] text-center">Scrapbooking</h2>
                    <div className="lg:w-full xl:w-[1300px] px-6 mx-auto absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[470px]">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img className="bg-cover mx-auto lg:w-full xl:w-[1300px] object-cover h-[600px] rounded-lg" src={banner3} alt="banner" />
                    <h2 className="text-[50px] md:text-[90px] xl:text-[150px] platypi font-bold absolute text-white bg-[#00000066] rounded-lg px-3 left-0 right-0 mx-auto w-fit mt-[180px] text-center">Lampworking</h2>
                    <div className="lg:w-full xl:w-[1300px] px-6 mx-auto absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[470px]">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img className="bg-cover mx-auto lg:w-full xl:w-[1300px] object-cover h-[600px] rounded-lg" src={banner4} alt="banner" />
                    <h2 className="text-[30px] md:text-[60px] xl:text-[80px] platypi font-bold absolute text-white bg-[#00000066] rounded-lg px-3 left-0 right-0 mx-auto w-fit mt-[180px] text-center">Paper Quilling & origami</h2>
                    <div className="lg:w-full xl:w-[1300px] px-6 mx-auto absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[470px]">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Banner;