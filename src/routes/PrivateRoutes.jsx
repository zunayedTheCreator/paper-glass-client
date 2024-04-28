import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const user1 = localStorage.getItem('loggedUser');
    const user2 = localStorage.getItem('signedUser');

    if (user1 || user2) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;