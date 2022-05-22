import React from "react";

class Box1 extends React.Component {
    render() {
        return (
            <div style={{ width: "500px", height: "400px", backgroundColor: "#AED581", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box2 />
            </div>
        );
    }
}

class Box2 extends React.Component {
    render() {
        return (
            <div style={{ width: "400px", height: "300px", backgroundColor: "#4FC3F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box3 />
            </div>
        );
    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div style={{ width: "300px", height: "200px", backgroundColor: "#F8BBD0", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                <Box4 />
                <Box4 />
            </div>
        );
    }
}
class Box4 extends React.Component {
    render() {
        return <div style={{ width: "150px", height: "70px", backgroundColor: "#EC407A" }}></div>;
    }
}

export default Box1;