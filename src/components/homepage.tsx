import React from "react";
import Navbar from "./nav";

const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p">
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Homepage;