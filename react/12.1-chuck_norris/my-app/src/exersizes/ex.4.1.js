import React from "react";

class Ex4_1 extends React.Component {
    render() {
        return (
            <div>
                <Button text="important" />
                <Button text="not important" />
            </div>
        );
    }
}

const Button = (props) => {
    return <button className="button1">{props.text}</button>;
};

export default Ex4_1;