import React from 'react';

class TodaysWeather extends React.Component {

  render() {
    return (
      <div>
        Location: {this.props.location}<br />
        Temp: {this.props.currentTemp} Celcius
      </div>
    )
  }
}

export default TodaysWeather;
