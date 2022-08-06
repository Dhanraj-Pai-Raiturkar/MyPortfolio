import React from "react";
import './App.scss';
import Header from "./header/Header";

const App = () => {

    const headerItems = [
        'Home',
        'Skills',
        'Projects',
        'About',
    ]

    return (
        <div className="app">
            <Header content={headerItems}></Header>
        </div>
    );
}

export default App;