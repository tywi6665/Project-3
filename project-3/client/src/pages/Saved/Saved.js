import React, { Fragment, Component } from "react";
import { ColorExtractor } from "react-color-extractor";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Card from "../../components/Card";
import SubmitBtn from "../../components/SubmitBtn";
import "./Saved.css";

const swatchStyles = {
    marginTop: 20,
    display: "flex",
    justifyContent: "center"
};

class Saved extends Component {

    state = {
        photos: ["./images/DSC_0115.jpg","./images/DSC_0313.jpg", "./images/DSC_0200.jpg"],
        file: null,
        colors: [],
        src: null
    };

    // componentDidMount() {
    //     console.log(this.state);
    // };

    colorSwatches = () => {
        const { colors } = this.state;
        console.log(colors);
        return colors.map((color, id) => {
            return (
                <div
                    className="swatch"
                    key={id}
                    style={{
                        backgroundColor: color
                    }}
                > 
                    <p
                        style={{
                            color: color
                        }}
                    >{color}</p>
                </div>
            );
        });
    };

    getColors = colors => {
        this.setState(state => ({ colors: [...state.colors, ...colors] }));
    }

    handleFileUpload = event => {
        console.log(event.target)
        this.setState({
            file: event.target.files,
            src: event.target.files[0].name
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.file = (this.state.file[0]);
        console.log(formData)   
        API.uploadPhoto(formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    imageClick = event => {
        const src = event.target.getAttribute("src");
        this.setState({
            colors: [],
            src: src
        });
    }

    render () {
        return (
            <Fragment>
                <Nav />
                <Container>
                    <form ref="uploadForm" onSubmit={this.handleFormSubmit}>
                        <h6>Upload Photos</h6>
                        <Card 
                            type="file"
                            // value={this.state.url}
                            onChange={this.handleFileUpload}
                            name="sampleFile"
                        />
                        <SubmitBtn
                            type="submit" 
                            disabled={!(this.state.file)}
                        />
                    </form>
                </Container>
                <Container>
                    <div className="wrapper">
                        <ColorExtractor getColors={this.getColors}>
                            <img src={this.state.src} alt="#" />
                        </ColorExtractor>
                        <div style={swatchStyles}>{this.colorSwatches()}</div>
                    </div>
                </Container>
                {this.state.photos.map(photo => (
                    <Container>    
                        <img onClick={this.imageClick} src={photo} key={photo} alt="#" />
                    </Container>    
                ))}
                   
            </Fragment>
        );
    }

}

export default Saved;