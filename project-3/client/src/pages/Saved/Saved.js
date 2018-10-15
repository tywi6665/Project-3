import React, { Fragment, Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Container from "../../components/Container";
import Card from "../../components/Card";
import { PhotoList } from "../../components/PhotoList";
import SubmitBtn from "../../components/SubmitBtn";

class Saved extends Component {

    state = {
        url: ""
    }

    // componentDidMount() {
    //     API.;
    // };

    uploadPhoto = (photo) => {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.url) {
            this.uploadPhoto(this.state.url)
        }
    };

    render () {
        return (
            <Fragment>
                <Nav />
                <Container>
                <form>
                        <h6>Upload Photos</h6>
                        <Card 
                            value={this.state.url}
                            onChange={this.handleInputChange}
                            name="upload"
                            placeholder="Photo URL"
                        />
                        <SubmitBtn 
                            disabled={!(this.state.url)}
                            onClick={this.handleFormSubmit}
                        />
                    </form>
                </Container>
                <Container>
                    
                </Container>
            </Fragment>
        )
    }

}

export default Saved;