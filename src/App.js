import React from 'react';
import Weather from './Weather';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="weather-cards">
        <Weather weeklyForcast={weeklyForcast} />
      </div>
    )
  }
}

let weeklyForcast = [
  {
    day: 'Monday',
    forecast: 'rainy',
    high: 29,
    low: 11
  },
  {
    day: 'Tuesday',
    forecast: 'sunny',
    high: 27,
    low: 19
  },
  {
    day: 'Wednesday',
    forecast: 'party cloudy',
    high: 31,
    low: 12
  },
  {
    day: 'Thursday',
    forecast: 'mostly sunny',
    high: 31,
    low: 8
  },
  {
    day: 'Friday',
    forecast: 'mostly sunny',
    high: 30,
    low: 10
  },
  {
    day: 'Saturday',
    forecast: 'sunny',
    high: 36,
    low: 16
  },
  {
    day: 'Sunday',
    forecast: 'sunny',
    high: 31,
    low: 12
  }
];

export default App;
