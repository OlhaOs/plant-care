import { Typography } from '@mui/material';
import Header  from '../components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header/>
      <Typography variant="h3" align="center">Популярні рослини</Typography>
    </main>
  );
}
