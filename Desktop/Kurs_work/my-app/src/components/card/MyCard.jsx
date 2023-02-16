import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { POSTER } from '../../API/const';
import styles from './MyCard.module.css';
const MyCard = (props) => {
  const { overview, poster_path, title, id } = props;
  // console.log(id);
  const [text, setText] = useState(false);
  const toggleExpanded = () => {
    setText(!text);
  };
  // const [follow, setFollow] = useState('');
  // console.log(follow);
  function addFollow(id) {
    console.log(id);
    return props.find((file) => file.id === id);
  }

  return (
    <Card className={styles.card} sx={{ width: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="600"
        image={`${POSTER}${poster_path}`}
      />
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
        <Button onClick={() => addFollow} size="small">
          Share
        </Button>
        <Button onClick={toggleExpanded} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
