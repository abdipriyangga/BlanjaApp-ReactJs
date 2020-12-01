import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousell from '../components/Carousell/Carousell'
import Category from '../components/Category/Category'
import Products from '../components/Products/Products'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousell />
            <Category />
            <Products />
        </div>
    )
}
