import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className='flex justify-center min-h-screen items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-car"></div>
        </div>
    }
    if( !user ){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;