import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './title.css';

function Title({ formActive, activateForm }) {
    const [clicked, setClicked] = useState(false);
    const { contextSafe } = useGSAP();

    if(formActive) return (<></>);

    const handleClick = contextSafe(({ currentTarget }) => {
        setClicked(true);
        gsap.to(currentTarget, {rotation: "+=2000",
                                fontSize: "0px",
                                duration: 1,
                                onComplete: activateForm});
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

    return (
        <div className="title-cont">
            <button onClick={handleClick} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Wiki Wormhole</button>
        </div>
    );
};

export default Title;