import React, { useState } from 'react';
import './Users.css';

const Users = ({name,id,img}) => {
        const[active, setActive] = useState(false)
    
    const changeActive = () => {
        setActive(!active);
        console.log(setActive);
    }


    return (  
        <div className="body">
        <div className='user'>
        <a href='#userOne'><img src={img} alt="" className='img'/></a>
        <p className='p'>{name}</p>

        {
            active ?
            <p className='active'
            onClick={changeActive}>В сети</p>
            :
            <p className='disactive' onClick={changeActive}>Не в сети</p>
        }
            
          
        </div>
        </div>
    );
}

export default Users;
