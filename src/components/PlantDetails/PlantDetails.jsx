import Header from '../Header/Header';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Stack from '@mui/material/Stack';

import { ThreeDots } from 'react-loader-spinner';

export default function PlantDetails({ data }) {
  const { plantId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const selectedPlant = data.find(item => item.id === plantId);

  useEffect(() => {
    if (selectedPlant) {
      setLoading(false);
    }
  }, [selectedPlant]);

  return (
    <>
      <Header />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2px',
          marginBottom: '2px',
        }}
      >
        <Button
          variant="outlined"
          startIcon={<NavigateBeforeIcon />}
          onClick={() => navigate(-1)}
          fullWidth
        >
          Go Back
        </Button>
      </Stack>
      {loading ? (
        <div>
          <ThreeDots wrapperStyle={{ justifyContent: 'center' }} />
        </div>
      ) : (
        <Card
          key={selectedPlant.id}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backgroundSize: 'cover',
            padding: '1rem',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={selectedPlant.image}
              alt={selectedPlant.title}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: 'block',
                margin: '0px auto',
                maxWidth: '100%',
                width: '30%',
                borderRadius: '4px',
                boxShadow: ' 1px 1px 20px rgba(0,0, 0, 0.3)',
              }}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  textAlign: 'center',
                }}
              >
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
      )}
    </>
  );
}
