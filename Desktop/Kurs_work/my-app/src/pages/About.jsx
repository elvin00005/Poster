import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useState } from 'react';
import MyCard from '../components/card/MyCard';

const About = () => {
  const [sharedItem, setSharedItem] = useState(null);

  const handleShare = (item) => {
    setSharedItem(item);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {sharedItem && (
        <CardMedia
          component="img"
          alt={sharedItem.title}
          height="140"
          image={`${POSTER}${sharedItem.poster_path}`}
          title={sharedItem.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About
        </Typography>
        {sharedItem ? (
          <Typography variant="body2" color="text.secondary">
            {sharedItem.overview}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            This is the about page.
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleShare(sharedItem)}>
          Share
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default About;
