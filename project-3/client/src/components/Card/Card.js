import React from "react";
import "./Card.css";
import "../SubmitBtn";
import SubmitBtn from "../SubmitBtn";

const Card = () => (
    <pre>
        <code className="card">
           <form>
                <div className="hex">
                    <label for="hexForm">Hex Color Code</label>
                    <input className="u-full-width" type="input" placeholder="000000" id="hexForm"/>
                </div>
                <div className="named">
                    <label for="namedForm">Closest Named Color</label>
                    <input className="u-full-width" type="input" placeholder="black" id="namedForm"/>
                </div>
                <SubmitBtn />
            </form> 
        </code>
    </pre>
);

export default Card;