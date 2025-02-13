import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="logo-website">
            <div className="logoTitle">
                <img src="/logo1.png" alt="Logo" className="h-10 w-10" width={150} />
                <span className="text-xl font-bold text-gray-800">Pippa's Pawfect Paws</span>
            </div>
            <div className="buttonsTitle">
                <button className="text-gray-800 hover:text-gray-600">Home</button>
                <button className="text-gray-800 hover:text-gray-600">Services</button>
                <button className="text-gray-800 hover:text-gray-600">Dogs</button>
            </div>
            <div className="contactTitle">
                <button className="text-gray-800 hover:text-gray-600">Contact Us</button>
            </div>
        </nav>
    );
}

export default Navbar;