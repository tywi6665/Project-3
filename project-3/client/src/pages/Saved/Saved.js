import React, { Fragment, Component } from "react";
import { ColorExtractor } from "react-color-extractor";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Card from "../../components/Card";
import SubmitBtn from "../../components/SubmitBtn";

const SWATCH_STYLES = {
    marginTop: 20,
    display: "flex",
    justifyContent: "center"
  };
  

class Saved extends Component {

    state = {
        file: null,
        colors: []
    };

    // componentDidMount() {
    //     API.;
    // };

    uploadPhoto = (photo) => {

    }

    colorSwatches = () => {
        const { colors } = this.state;
        return colors.map((color, id) => {
            return (
                <div
                    key={id}
                    style={{
                        backgroundColor: color,
                        width: 100,
                        height: 100
                    }}
                />
            );
        });
    };

    getColors = (colors) => {
        this.setState(state => ({ colors: [...state.colors, ...colors] }));
    }

    handleFileUpload = (event) => {
        this.setState({ file: event.target.files });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", this.state.file);
        console.log(formData)   
        API.uploadPhoto(formData)
            .then(res => console.log("YEAHHHHH"))
            .catch(err => console.log(err));
    };

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
                    <ColorExtractor getColors={this.getColors}>
                        <img src="#" alt="#" />
                    </ColorExtractor>
                    <div style={SWATCH_STYLES}>{this.colorSwatches()}</div>
                </Container>
            </Fragment>
        );
    }

}

export default Saved;