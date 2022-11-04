import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import {BiMenuAltRight} from 'react-icons/bi'
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('User Logged Out')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='py-2 shadow-md'>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <Link to='/'><img src={logo} alt='' className='w-16'/></Link>
                <div className='flex gap-3 items-center'>
                    <ul className='flex gap-4'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.uid ? 
                            <>
                            <li><Link to='/orders'>Orders</Link></li>
                            <li onClick={handleLogOut}><Link>Logout</Link></li>
                            </>
                            : <li><Link to='/login'>Login</Link></li> 
                        }
                    </ul>
                    <BiMenuAltRight></BiMenuAltRight>
                </div>
            </div>
        </div>
    );
};

export default Header;