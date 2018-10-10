import React, { Fragment, Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Canvas from "../../components/Canvas";
import Card from "../../components/Card";
import PhotoList from "../../components/PhotoList";



class Main extends Component {

    componentDidMount() {
        API.getPhotos("ff0000");
    };

    render () {
        return (
            <Fragment>
                <Container>
                    <p>Hey There</p>
                    <Canvas />
                    <Card />
                    <PhotoList />
                </Container>
            </Fragment>
        )
    }

}

export default Main;