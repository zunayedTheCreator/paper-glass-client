import { useEffect, useState } from 'react';
import person from '../../../public/images/person.gif'
import { ClimbingBoxLoader } from 'react-spinners';

const Profile = () => {

    const loggedUser = localStorage.getItem('loggedUser')
    const user1 = JSON.parse(loggedUser);
    const loggedName = user1?.providerData[0].displayName
    const loggedPhoto = user1?.providerData[0].photoURL
    const loggedEmail = user1?.providerData[0].email
    
    const signedUser = localStorage.getItem('signedUser')
    const user2 = JSON.parse(signedUser)
    const signedName = user2?.name
    const signedPhoto = user2?.img
    const signedEmail = user2?.email

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            { loading ? (<ClimbingBoxLoader className="mx-auto my-20" color={'#E11D48'} loading={loading} size={10}></ClimbingBoxLoader>) : (<div className="w-full lg:w-[700px] mx-auto border-rose-600 border-4 rounded p-5 bg-rose-300 flex flex-col lg:flex-row items-center gap-5 text-black">
                <img className="w-[250px] h-[250px] object-cover border-2 rounded p-2 border-teal-600 bg-white" src={loggedPhoto || signedPhoto} alt="" />
                <div>
                    <h3 className="text-xl font-bold">Name: {loggedName || signedName}</h3>
                    <div className="border-t-2 border-black w-[90px] mt-2 mb-4"></div>
                    <h3 className="text-xl font-bold">Email: {loggedEmail || signedEmail}</h3>
                    <div className="border-t-2 border-black w-[90px] mt-2 mb-4"></div>
                    <img className='w-[40px] bg-black rounded-full' src={person} alt="" />
                </div>
            </div>)}
        </div>
    );
};

export default Profile;