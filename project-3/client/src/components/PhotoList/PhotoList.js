import React from "react";
import "./PhotoList.css";

const PhotoList = props => (
    <pre>
        <code className="photoList">
            <h3>Image Results</h3>
            <div className="images">
                <img src={props.url} alt={props.description} id={props.id} key={props.id} />
            </div>
        </code>
    </pre>
);

export default PhotoList;