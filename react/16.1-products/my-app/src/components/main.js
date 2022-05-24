import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Header from './header'
import Homepage from './homepage'
import ProductDetail from './productDetail';
import Products from './products'

export default class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Route exact path="/" component={Homepage} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={ProductDetail} />
                {/* <Route path="/header" component={Header} /> */}

            </>
        )
    }
}
