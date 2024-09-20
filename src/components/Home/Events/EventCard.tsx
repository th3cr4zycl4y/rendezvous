import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import NorthEastIcon from '@mui/icons-material/NorthEast';


interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  imageUrl: string;
  description: string;
}

const truncateText = (text: string,) => {
  const words = text.split(' ');
  if (words.length <= 36) {
    return text;
  }
  return words.slice(0, 36).join(' ') + '...';
};

const EventCard: FC<EventCardProps> = ({ id, title, date, time, imageUrl, description }) => {
  return (
    <Card sx={{ maxWidth: 421, marginBottom: 10 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt={title}
        />
        <CardContent className="card-content">
          <Typography gutterBottom component="div" className="card-title">
            {title}
          </Typography>
          <Typography variant="body1" className="card-date">
            {`${date}`}
            <span className="dot"></span>
            {`${time}`}
          </Typography>
          <Typography variant="body2" className="card-description">
            {truncateText(description)}
          </Typography>
          <Button
            variant="contained"
            size="small"
            className="arrow-button"
            endIcon={<NorthEastIcon />}
            component={Link} to={`/event/${id}`}
          >
            View details
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
