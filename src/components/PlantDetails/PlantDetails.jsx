import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Stack from '@mui/material/Stack';

export default function PlantDetails({ data }) {
  const { plantId } = useParams();
  const selectedPlant = data.find(item => item.id === parseInt(plantId));
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button
          variant="outlined"
          fullWidth="100%"
          startIcon={<NavigateBeforeIcon />}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Stack>

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
