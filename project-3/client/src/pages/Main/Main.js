import React, { Fragment, Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Canvas from "../../components/Canvas";
import Card from "../../components/Card";
import { PhotoList } from "../../components/PhotoList";
import SubmitBtn from "../../components/SubmitBtn";
import "./Main.css";

class Main extends Component {

    state = {
        photos: [],
        hexSearch: "",
        namedSearch: ""
    }

    componentDidMount() {
        const color = "fb3d71"
        this.loadPhotos(color);
    };


    loadPhotos = color => {
        API.getPhotos(color)
            .then(res => this.setState({ photos: res.data.data }))
            .catch(err => console.log(err));
    }

    setColor = (color) => {
        this.setState({ hexSearch: color })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.hexSearch) {
            this.loadPhotos(this.state.hexSearch)
        }
    };

    render() {
        return (
            <Fragment>
                <Nav />
                <Container>
                    <Canvas 
                        setColor={this.setColor}
                    />
                    <form>
                        <h6>Hexidecimal Color Code</h6>
                        <Card 
                            value={this.state.hexSearch}
                            onChange={this.handleInputChange}
                            name="hexSearch"
                            placeholder="000000"
                        />
                        <h6>Closest Named Color</h6>
                        <Card 
                            value={this.state.namedSearch}
                            onChange={this.handleInputChange}
                            name="namedSearch"
                            placeholder="black"
                        />
                        <SubmitBtn 
                            disabled={!(this.state.hexSearch)}
                            onClick={this.handleFormSubmit}
                        />
                    </form>
                    <PhotoList>
                        {this.state.photos.map(photo => (
                            <div className="images" key={photo.id}>
                                <img src={photo.assets.huge_thumb.url} alt={photo.description} />
                            </div>
                        ))}
                    </PhotoList>
                </Container>
            </Fragment>
        )
    }



}

export default Main;