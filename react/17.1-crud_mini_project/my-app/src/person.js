import React, { Component } from 'react'

export default class Person extends Component {
    state = { inputVal: ' ' };
    handleChange = (event) => {
        this.setState({ inputVal: event.target.value });
        console.log(this.state.inputVal);
    }
    render() {

        return (
            <div className="personContainer"
                style={{ border: "3px solid  green", display: 'flex', flexWrap: 'wrap' }}  >
                <div>{this.props.name}</div>
                <img alt="#" src={this.props.img}
                    style={{ border: "3px solid  red", display: 'flex', flexWrap: 'wrap' }}
                ></img>
                <button>Delete</button>
                <button onClick={() => {
                    this.props.handleUpdate(this.props.id, this.state.inputVal)
                }}>Update</button>
                <input
                    value={this.state.inputVal}
                    onChange={this.handleChange}
                />

            </div>
        );


    }
}
