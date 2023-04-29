import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () =>{
        logOut()
        .then( () =>{})
        .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>

                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs ml-5">Sign out</button>
                    </>
                        :

                        <Link className="btn btn-ghost normal-case text-xl" to="/login">Log in</Link>
                }

            </div>
        </div>
    );
};

export default Header;