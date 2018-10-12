import React, { Fragment, Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Canvas from "../../components/Canvas";
import Card from "../../components/Card";
import { PhotoList, Item } from "../../components/PhotoList";
import "./Main.css";

class Main extends Component {

    state = {
        photos: [],
        hexSearch: "",
        namedSearch: ""
    }

    componentDidMount() {
        const color = "a9f800"
        this.loadPhotos(color);
    };


    loadPhotos = color => {
        API.getPhotos(color)
            .then(res => this.setState({ photos: res.data.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Canvas />
                    <Card />
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