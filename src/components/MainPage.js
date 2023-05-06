import React from 'react';
import {useSelector} from "react-redux";
import {prodSelect} from "../redux/productsSlice";
import Product from "./Product";

const MainPage = () => {
    const {prod} = useSelector(prodSelect)
    return (
        <div>
            {
             prod.map(i => <Product i={i}/>)
            }
        </div>
    );
};

export default MainPage;