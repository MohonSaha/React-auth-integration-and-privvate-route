import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between px-8">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">Auth Master</a>

                    

                    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                </div>


                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                    {
                        user ? <>
                            {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                            <button onClick={handleLogout} className="btn btn-sm ml-5 btn-outline btn-light">Sign out</button>
                        </>
                            :

                            <Link className="btn btn-ghost normal-case text-xl" to="/login">Log in</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;