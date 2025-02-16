import React from "react";
import Navbar from "./nav";

const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-container">
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="/0216.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-content">
                    <h1>Reliable Dog Sitter</h1>
                    <p>We pride ourselves on walking and taking care off your four legged friends! Book a meet and greet with us today!</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;