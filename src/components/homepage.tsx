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
                    <button>Schedule a call</button>
                </div>
            </div>
            <h1 className="PetcareTitle">Our Petcare Standards</h1>
            <div className="petStandard">
            <div className="logoText">
                <img src="/greyhound.png" alt="greyhound picture" />
                <div>
                <h2>Spacious Play Areas</h2>
                <p>We have a garden where your dogs can run around all day and play fetch, chew toys, and everything else!</p>
                </div>
            </div>
            <div className="logoText">
                <div>
                <h2>Quality Time 1-2-1 Time</h2>
                <p>Whether this will be training or just spending time playing, your pup will get attention</p>
                </div>
                <img src="cockapoo.png" alt="cockapoo picture" />
            </div>
            <div className="logoText">
                <img src="group.png" alt="group picture" />
                <div>
                    <h2>Group Playing and Socialising</h2>
                    <p>Your dog will be able to play in a group with other dogs!</p>
                </div>
            </div>
            <div className="logoText">
            <div>
                <h2>Plenty of exercise</h2>
                <p>If your dog needs a short walk daily or a nice long walk (like my pointer), then this can all be accommodated based on your needs</p>
                </div>
                <img src="ralph.png" alt="ralph picture" />
            </div>
        </div>
        <div>
            <h1>Why Choose Us?</h1>
        </div>
        </div>
    );
};

export default Homepage;