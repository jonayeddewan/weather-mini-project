import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ name, temp, humidity, feelsLike, pressure, weatherDescription, weatherIcon, placeImage}) {
  return (
    <Card sx={{ maxWidth: 700, margin: '25px auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image={placeImage}
          alt={`View of ${name}`}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
            Temperature: {temp}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels like: {feelsLike}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Humidity: {humidity}%
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Pressure: {pressure} hPa
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Conditions: {weatherDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}