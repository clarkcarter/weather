import React from 'react';
import Input from './Input';
import TodaysWeather from './TodaysWeather';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: ''
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
      location: this.state.input,
      input: ''
    });

  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <Input onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.input}/>
        <TodaysWeather location={this.state.location}/>
      </div>
    )
  }
}

export default Weather;
