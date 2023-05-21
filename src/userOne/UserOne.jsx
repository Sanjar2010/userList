import React from 'react';
import './UserOne.css'
import img1 from "./../image/1.png";
const UserOne = () => {
    return (
        <div className='userOne' id='userOne'>

            <img src={img1} alt="" className='image'/>
            <p className='first-sub'>My name is Dima.I am 20 years old.My profession is a doctor</p>

        </div>
    );
}

export default UserOne;
