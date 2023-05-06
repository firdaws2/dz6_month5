import React from 'react';
import {useSelector} from "react-redux";
import {busSelect} from "../redux/busSlice";

const Busket = () => {
    const {bus} = useSelector(busSelect)
    return (
        <div>
            {
                bus.map(i => <div>
                    <img src={i.picture} alt=""/>
                    <p>{i.name}</p>
                </div>)
            }
        </div>
    );
};

export default Busket;