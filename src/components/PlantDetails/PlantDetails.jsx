import Header from '../Header/Header';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PlantDetails({ data }) {
  const { plantId } = useParams();
  const selectedPlant = data.find(item => item.id === parseInt(plantId));

  return (
    <>
      <Header />
      <Card key={selectedPlant.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + '/images/' + selectedPlant.image}
            alt={selectedPlant.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {selectedPlant.title}
            </Typography>
            <Typography gutterBottom variant="h5">
              Опис
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {selectedPlant.description}
            </Typography>
            <Typography gutterBottom variant="h5">
              Догляд
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedPlant.care}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
