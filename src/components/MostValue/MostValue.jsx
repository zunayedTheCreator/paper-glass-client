import img1 from '../../../public/images/1.jpg'
import img2 from '../../../public/images/2.jpg'
import img3 from '../../../public/images/3.jpg'
import img4 from '../../../public/images/4.jpg'

const MostValue = () => {
    return (
        <div className="mt-6 w-full xl:w-[1300px] px-0 lg:px-[150px] xl:px-[250px] mx-auto">
            <h2 className="text-3xl font-bold text-center">Most Valuable Items</h2>
            <div className="border-t-2 w-2/6 border-black mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full mx-auto lg:mx-0">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Burden King!</h2>
                        <p>350,000$</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full mx-auto lg:mx-0">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Angelic Dairy</h2>
                        <p>12,000$</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full mx-auto lg:mx-0">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paper Garden</h2>
                        <p>60,000$</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full mx-auto lg:mx-0">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swan Bath</h2>
                        <p>500,000$</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MostValue;