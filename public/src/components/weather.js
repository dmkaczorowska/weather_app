import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content className="content">
            <Card.Header className="header">{weatherData.name}</Card.Header>
            <p>TEMPERATURE</p>
            <p className="data">(Math.round{weatherData.main.temp}) &deg;C</p>
            <p>DESCRIPTION</p>
            <p className="data">{weatherData.weather[0].main}</p>
            <p>HUMIDITY</p>
            <p className="data">{weatherData.main.humidity} %</p>
            <p>DAY</p>
            <p className="data">{moment().format('dddd')}</p>
            <p>DATE</p>
            <p className="data">{moment().format('LL')}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;