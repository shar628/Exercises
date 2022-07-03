import React, { Component } from 'react'
import products from '../store'


export default class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.product = products.find((product) => product.id === this.props.match.params.id * 1)
    }

    render() {
        return (
            <div>{this.product.size} {this.product.price} </div>
        )
    }
}
