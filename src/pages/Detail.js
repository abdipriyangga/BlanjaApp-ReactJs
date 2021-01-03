import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Detail from '../components/Detail/Detail'
import SingleProduct from '../components/Detail/SingleProduct'
// import Products from '../components/Products/Products'


export default function DetailProduct(props) {
    const {match} = props
    return (
        <div>
            <SingleProduct 
                product = {match}
            />
            {/* <Navbar />
            <Detail /> */}
        
        </div>
    )
}
