import React from "react";
import "./Container.css";

    const Container = ({ children }) => (
        <pre>
            <code className="container">
            {children}
            </code>
        </pre>
    );

export default Container;