import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

class Intro extends Component {

    render() {
        return(
            <div className="div">
                <button className="button">
                    <Link className="link" to={"/main"}>(click)</Link>
                </button>
            </div>     
        )
    }

}


export default Intro;

