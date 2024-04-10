import "./form.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function FormButton() {
    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, {backgroundColor: "black",
                                color: "white",
                                // width: "+=10vw",
                                fontSize: "12vw",
                                scaleX: "1.6",
                                duration: 0.5 });
    });

    const handleMouseLeave = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, {backgroundColor: "white",
                                color: "black",
                                fontSize: "9vw",
                                // width: "-=10vw",
                                scaleX: "1",
                                duration: 0.5 });
    });

    return (
        <div className="form-submit" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>&#x27B2;</span>
        </div>
    );
}


function Form({ formActive }) {
    const formContRef = useRef(null);

    const { contextSafe } = useGSAP();

    const loadForm = contextSafe(() => {
        gsap.from(formContRef.current, {backgroundColor: "black", x: "-=100%", duration: 1});
    });

    useEffect(() => {
        if(!formActive) return;
        formContRef.current.style.visibility = 'visible';
        loadForm(formContRef.current);
    }, [formActive]);

    return (
        <div className="form-cont" ref={formContRef}>
            <div className="form-input-cont">
                <div className="form-input" id="first-input">
                    <input type="text" placeholder="From"/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="To"/>
                </div>
            </div>
            <FormButton/>
        </div>
    );
}

export default Form;