import unique from '../../../public/images/unique.jpg'

const MostUnique = () => {
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-center">Most Unique Item</h2>
            <div className="border-t-2 w-2/6 border-black mx-auto mb-8"></div>
            <div className="hero w-full lg:w-[1000px] mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={unique} className="w-[450px] h-[300px] rounded-lg shadow-2xl object-cover border-2 border-black" />
                    <div>
                        <h1 className="text-5xl font-bold">Glass Town In Frame</h1>
                        <p className="py-6 font-semibold">A glass painting delicately portrays the charm of a quaint town nestled within its frame. Vivid hues breathe life into its streets, capturing the essence of bustling markets and quiet alleys. Each stroke tells a story, invoking nostalgia and inviting viewers to immerse themselves in the timeless beauty of the townscape.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostUnique;