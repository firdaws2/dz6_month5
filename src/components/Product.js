import React from 'react';
import {useDispatch} from "react-redux";
import {setBus} from "../redux/busSlice";

const Product = ({i}) => {
    const dispatch = useDispatch()

    const getBus = () => {
     dispatch(setBus(i))
    }


    return (
        <div>
            <img src={i.picture} alt=""/>
            <p>{i.name}</p>
            <button onClick={getBus}>get</button>
        </div>
    );
};

export default Product;