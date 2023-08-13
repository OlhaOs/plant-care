import { Typography } from '@mui/material';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Typography variant="h3" align="center" sx={{ mt: 4 }}>
        Популярні рослини
        <Typography  sx={{ ml: 2, mt: 4 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos laborum,
          inventore mollitia magni eveniet suscipit? Error earum repellat
          inventore, nostrum obcaecati expedita tempora harum itaque nemo
          placeat corporis iste! Consequuntur?
        </Typography>
      </Typography>
    </main>
  );
}
