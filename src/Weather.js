import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Weather extends React.Component {
  render(props) {
    return (
      <div>
        <Card.Group>
          {this.props.weeklyForcast.map(dailyForcast => (
            <Card raised>
              <Card.Content textAlign='center'>
                <Card.Header>{dailyForcast.day}</Card.Header>
                <h2>{dailyForcast.forecast}</h2>
                <span>High: {dailyForcast.high}</span>
                <span>Low: {dailyForcast.low}</span>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default Weather;
