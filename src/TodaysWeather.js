import React from 'react';
import axios from 'axios';

class TodaysWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: ''
    };
  }


getWeather = () => {
      const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
      const city = this.props.location;
      const endUrl = '&units=metric&APPID=631644fd399fac2b61f20a440c083dba';
      const url = baseUrl + city + endUrl;
      axios.get(url)
      .then((result) => {
        this.setState({
          currentTemp: result.data.main.temp
        });
      });
    }

  render() {
    if (this.props.location !== '') {
      this.getWeather();
    }
    return (
      <div>
        Location: {this.props.location}<br />
        Temp: {this.state.currentTemp} Celcius
      </div>
    )
  }
}

export default TodaysWeather;
