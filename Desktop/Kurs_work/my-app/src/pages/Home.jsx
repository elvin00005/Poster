import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MyCard from '../components/card/MyCard';
import { API_KEY } from '../API/const';
const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setList(data.results))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <Grid
      container
      item
      xs={4}
      sm={6}
      md={12}
      spacing={3}
      justifyContent="center"
      gap="25px"
    >
      {list.map((item) => (
        <MyCard {...item} key={item.id} />
      ))}
    </Grid>
  );
};

export default Home;
