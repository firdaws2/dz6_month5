import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busSelect} from "../redux/busSlice";

const Header = () => {
    const {bus} = useSelector(busSelect)
    return (
        <div style={{display: 'flex', columnGap: '40px'}}>
            <NavLink className='link' to={'/'}>Main</NavLink>
            <NavLink className='link' to={'/bus'}>Busket  {bus.length} </NavLink>
        </div>
    );
};

export default Header;