import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './home.css';

function Title() {
    const [clicked, setClicked] = useState(false);
    const { contextSafe } = useGSAP();


    const handleClick = contextSafe(({ currentTarget }) => {
        setClicked(true);
        gsap.to(currentTarget, {rotation: "+=2000",
                                fontSize: "0px",
                                duration: 1});
    });

    const handleMouseEnter = contextSafe(({ currentTarget }) => {
        if(clicked) return;
        gsap.to(currentTarget, {fontSize: "10vw",
                                duration: 0.5});
    });

    const handleMouseLeave = contextSafe(({ currentTarget }) => {
        if(clicked) return;
        gsap.to(currentTarget, {fontSize: "7vw",
                                duration: 0.5});
    });

    return (<>
         <button onClick={handleClick} 
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>Wiki Wormhole</button>
    </>);
};

function Home() {
    return (
        <div className="home-header">
            <Title/>
        </div>
    );
}

export default Home;