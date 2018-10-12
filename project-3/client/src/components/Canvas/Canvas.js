import React, { Component } from "react";
import "./Canvas.css";
import * as d3 from "d3";

class Canvas extends Component {
    render() {
        return (
            <pre>
                <canvas className="canvas u-full-width" id="canvas" width="512" height="512" />
            </pre>
        )

    }

    componentDidMount() {
        this.ColorWheel();
    };
    
    ColorWheel() {

    var DEGREES_PER_RADIAN = 180 / Math.PI;

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    var bgImage = context.createImageData(canvas.width, canvas.height);

    var halfWidth = Math.floor(bgImage.width / 2);
    var halfHeight = Math.floor(bgImage.height / 2);

    var radius = Math.min(halfWidth, halfHeight);
    var radiusSquared = radius * radius;

    renderColorWheel(bgImage);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(bgImage, 0, 0);

        function renderColorWheel(image) {
            var i, j;
            for (j = 0; j < image.height; j++) {
                for (i = 0; i < image.width; i++) {
                    var x = i - halfWidth;
                    var y = j - halfHeight;

                    var distanceFromOriginSquared = x * x + y * y;
                    var withinDisc = (distanceFromOriginSquared <= radiusSquared);
                    if (withinDisc) {
                        var angleInDegrees = DEGREES_PER_RADIAN * (Math.atan2(y, x) + Math.PI);
                        var distanceFromOrigin = Math.sqrt(distanceFromOriginSquared);



                        var color = d3.hsl(angleInDegrees, (distanceFromOrigin / radius), 0.5).rgb();
                        setPixelColor(image, i, j, color);
                    }
                }
            }
        }

        function setPixelColor(image, x, y, color, alpha) {
            alpha = (alpha !== undefined ? alpha : 255);

            var NUM_CHANNELS = 4;
            var rowByteOffset = y * image.width * NUM_CHANNELS;
            var colByteOffset = x * NUM_CHANNELS;
            var pixelByteOffset = rowByteOffset + colByteOffset;

            image.data[pixelByteOffset + 0] = color.r;
            image.data[pixelByteOffset + 1] = color.g;
            image.data[pixelByteOffset + 2] = color.b;
            image.data[pixelByteOffset + 3] = alpha;
        }

    };

}

export default Canvas;