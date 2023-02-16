import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { POSTER } from '../../API/const';
import styles from './MyCard.module.css';

const MyCard = (props) => {
  const { overview, poster_path, title, id } = props;
  const [text, setText] = useState(false);
  const toggleExpanded = () => {
    setText(!text);
  };

  return (
    <Card className={styles.card} sx={{ width: 400 }}>
      <CardMedia component="img" alt={title} height="600" image={`${POSTER}${poster_path}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview.length > 60 ? (
            text ? (
              overview
            ) : (
              <>
                {overview.slice(0, 60)}
                <span className={styles.span}>...</span>
              </>
            )
          ) : (
            text
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.handleShare(props)} size="small">
          Share
        </Button>
        <Button onClick={toggleExpanded} size="small">
          Learn More
         </Button>
      </CardActions>
    </Card>
  );
};
