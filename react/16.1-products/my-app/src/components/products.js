import React, { Component } from 'react'
import products from '../store'
import { NavLink } from 'react-router-dom'



export default class Products extends Component {
    state = { products }
    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(t => {
                        return (<>
                            <li> <NavLink to={`/product/${t.id}`}  >
                                {t.title}
                            </NavLink>
                            </li>
                        </>)
                    })}
                </ul>

            </div >
        )
    }
}
