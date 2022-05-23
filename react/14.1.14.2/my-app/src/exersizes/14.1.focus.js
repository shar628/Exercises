import React from 'react';

class Focus extends React.Component {
    componentDidMount() {
        this.samerInput.focus();
        this.nameInput.value = 'i got focus'
    }
    render() {
        return (
            <div>
                <input defaultValue="Won't our focus" />
                <input
                    ref={(input5) => {
                        this.nameInput = input5;
                    }}
                    defaultValue='will focus'
                />
                <button type="button" ref={(input) => {
                    this.samerInput = input;
                }}>samer</button>
                <button type="button">shaul</button>
            </div>
        );
    }
}
export default Focus;