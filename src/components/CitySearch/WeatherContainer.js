import React, { Component } from "react";
// import Container from "./Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchForm from "./SearchForm";
import WeatherDetail from "./WeatherDetail";
import Container from 'react-bootstrap/Container';
import API from "../../utils/API";

class WeatherContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the Weather "The Matrix"
  componentDidMount() {
    this.searchWeather("Seattle");
  }

  searchWeather = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Weather API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchWeather(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.name || "Search for a Weather to Begin"}
            >
              {this.state.result.name ? (
                <WeatherDetail
                  title={this.state.result.name}
                  // date = {timeConverter(this.state.result.dt)}
                  latie={parseInt(this.state.result.lat)}
                  longie={parseInt(this.state.result.lon)}
                  icon={this.state.waether[0].icon}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WeatherContainer;
