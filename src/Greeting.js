import React from "react";

const Greeting = () => {
    const greetingText = 'Welcome to my first JSX React app! Explore, create, and innovate with me!';

    const greet = () => {
        return `${greetingText}`;
    };

    return(
        <div>
            <h1>Greeting Component</h1>
            <p>{greet()}</p>
        </div>
    );
};

export default Greeting;