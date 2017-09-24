import React from 'react';
import Input from './Input';
import TodaysWeather from './TodaysWeather';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: '',
      currentTemp: '',
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      location: this.state.input
    });
  }

  componentDidMount() {
      const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
      const city = this.state.location;
      const endUrl = '&units=metric&APPID=631644fd399fac2b61f20a440c083dba';
      const url = baseUrl + city + endUrl;
      if (this.state.location !== '') {
        axios.get(url)
      .then((result) => {
        this.setState({
          currentTemp: result.data.main.temp
        });
      });
  }

  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <Input onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.input}/>
        <TodaysWeather location={this.state.location} currentTemp={this.state.currentTemp}/>
        <h1>Location: {this.state.location}</h1>
        <h1>Input: {this.state.input}</h1>
        <h2>{this.state.url}</h2>
      </div>
    )
  }
}

export default Weather;
