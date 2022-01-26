import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (

    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p className="temp">{Math.round(weatherData.main.temp)}&deg;C</p>
        <p>Description</p>
        <p className="data">{weatherData.weather[0].main}</p>
        <p>Humidity</p>
        <p className="data">{weatherData.main.humidity} %</p>
        <p>Day</p>
        <p className="data">{moment().format('dddd')}</p>
        <p>Date</p>
        <p className="data">{moment().format('LL')}</p>
    </Card.Content>)

export default CardExampleCard;