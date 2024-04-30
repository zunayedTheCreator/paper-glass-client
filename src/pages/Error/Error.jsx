import { Link } from 'react-router-dom';
import error from '../../../public/images/error.png'
import MyDynamicTitle from '../../../MyDynamicTitle';

const Error = () => {
    MyDynamicTitle('Error')
    return (
        <div >
            <img className='mx-auto mb-3' src={error} alt="" />
            <div className='text-center mt-[2%]'>
                <h2 className='text-4xl font-extrabold mb-1'>Opps!!</h2>
                <h2 className='text-2xl font-bold text-red-500 mb-3'>404 Page not found</h2>
                <h2 className='text-xl font-semibold mb-2'>Looks like you are lost🙄</h2>
                <Link to={'/'}><button className='font-bold text-xl border-2 border-b-black border-r-black border-l-teal-400 border-t-teal-400 py-1 rounded w-fit bg-[#ffffff66] hover:bg-[#ffffff55] hover:border-b-teal-400 hover:border-r-teal-400 hover:border-l-black hover:border-t-black duration-200 px-6'>Go back</button></Link>
            </div>
        </div>
    );
};

export default Error;