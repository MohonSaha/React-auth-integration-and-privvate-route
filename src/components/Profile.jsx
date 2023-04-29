import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContext);


    return (
        <div>
            <h3>Your User Profile</h3>
            <p>Your Email: {user.email}</p>
        </div>
    );
};

export default Profile;