import React, { Component } from 'react'

export default class Rating extends Component {
    render() {
        const {product_rating} = this.props
        let x = '';
        for(let i = 0; i < product_rating; i++)
        {
            x += i;
        }
        let rate = x.split('');
        return (
            <>
            <div className="d-flex">
                <div className="rate">
                    {rate.map(() => {
                        return <i className="fas fa-star" style={{color: "#ffcd05"}}/>
                    })}
                </div>
                <p className="text-muted rate-num" >({product_rating})</p>
            </div>
            </>
        )
    }
}
