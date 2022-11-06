import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [expand, setExpand] = useState(false);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User Logged Out')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='py-2 shadow-md'>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <Link to='/'><img src={logo} alt='' className='w-16' /></Link>
                <div className='flex gap-3 items-center'>
                    <ul className={`bg-white px-10 py-2 md:flex gap-4 font-semibold absolute md:static rounded-b-lg ${expand ? 'top-14 right-0': 'top-[-200px] right-0'}`}>
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
                    <div onClick={()=> setExpand(!expand)} className='md:hidden'>
                        {
                            expand ? <AiOutlineClose></AiOutlineClose> :<AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;