import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import "./Intro.css";

class Intro extends Component {

    render() {
        return (
            <div className="div">
                {/* <button className="button">
                    <Link className="link" to={"/main"}>(click)</Link>
                </button>
                <pre>
                    <canvas id="canvas"/>
                </pre> */}
            </div>
        )
    }

    componentDidMount() {
        this.animation();
    };

    animation() {

        //Creating the canvas
        const width = 500;
        const height = 500;
        
        const canvas = d3.select("div").append("canvas")
            .attr("id", "canvas")
            .attr("width", `${width}px`)
            .attr("height", `${height}px`)

        canvas.node().getContext("2d");

        //Kicking off the animation
        //
        //
    }

}


export default Intro;

