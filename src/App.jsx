import './App.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { FirebaseApp } from 'firebase/app';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

import { createTheme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import { green } from '@mui/material/colors';
import Home from './pages/Home';
import IndoorPlants from './pages/Indoorplants';
import OutdoorPlants from './pages/Outdoorplants';
import SpeciesPlants from './components/SpeciesPlants/SpeciesPlants';
import PlantDetails from './components/PlantDetails/PlantDetails';
// import Care from './components/Care';
// import Desease from './components/Desease';

function App() {
  const [data, setData] = useState('');
  const theme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: green[300],
      },
      secondary: {
        main: '#000',
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'plants'));
      const dataBase = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataBase);
    };

    fetchData();
  }, []);

  // const data = [
  //   {
  //     id: 1,
  //     title: 'Фікус бенджаміна',
  //     description:
  //       'Фікус бенджаміна — кімнатна рослина, що не втрачає популярності десятки років. Попри це досі невідомо, чому вона має таку назву. Більшість думає, що, мабуть, цей вид відкрив якийсь собі такий Бенджамін. Але нічого подібного на сьогодні не доведено, тому зазвичай назву цього фікуса пишуть з маленької букви. Це одна з найпростіших у вирощуванні кімнатних рослин. Фікус бенджаміна любить сонце, і це головна умова його декоративності. Детально про догляд за ним піде мова в нашій статті.',
  //     species: 'Фікус',
  //     care: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis adipisci quisquam, vitae minima provident nihil quas dolorum delectus asperiores recusandae quae, rem praesentium facilis suscipit laudantium at. Veritatis, necessitatibus',
  //     image: '/images/img-not-found.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Фікус еластичний',
  //     description:
  //       'Цей фікуса характеризується масивними шкірястими листям темно-зеленого кольору або зі світлими плямами. Зазвичай в декоративних умовах рослина не розгалужується – на стовбурі розташовуються листя, які при хорошому догляді можуть досягати в довжину до 2 метрів. І це не дивно, адже фікус пружний з ранньої весни до пізньої осені може додавати по одному листку на тиждень. Іноді на листках присутній молочний сік, який використовується в промисловості для виробництва каучуку, але рослина сама загоює свої рани або відганяє шкідників. Він може викликати подразнення, якщо потрапить на шкіру',
  //     species: 'Фікус',
  //     care: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis adipisci quisquam, vitae minima provident nihil quas dolorum delectus asperiores recusandae quae, rem praesentium facilis suscipit laudantium at. Veritatis, necessitatibus',

  //     image: '/images/img-not-found.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Фікус Бенгальський',
  //     description:
  //       'це вічнозелене дерево, яке має форму життя баньян у своєму природному середовищі існування. Таким чином, «поселяючись» на більшій і міцнішій рослині, фікус випускає повітряні корінці, які, досягнувши землі, починають вкорінюватися і перетворюються на звичайний стовбур. Листя цього виду мають овальну форму, зелене забарвлення пластини зі світло-зеленими прожилками. У кімнатних умовах може досягати 3 метрів у висоту, а в природі – до 40 метрів',
  //     species: 'Фікус',
  //     care: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis adipisci quisquam, vitae minima provident nihil quas dolorum delectus asperiores recusandae quae, rem praesentium facilis suscipit laudantium at. Veritatis, necessitatibus',
  //     image: './images/img-not-found.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Сансевієрія Ханні',
  //     description:
  //       'спорт сансевієрії трисмугової, що все частіше фігурує як самостійний вид. Виділяється квіткоподібними розетками з трикутного, вкороченного листя, прикрашеного світлими салатово-срібними смужками.',
  //     species: 'Сансев’єрія',
  //     care: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis adipisci quisquam, vitae minima provident nihil quas dolorum delectus asperiores recusandae quae, rem praesentium facilis suscipit laudantium at. Veritatis, necessitatibus',
  //     image: './images/img-not-found.jpg',
  //   },
  // ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indoor" element={<IndoorPlants data={data} />}>
            <Route path="/indoor/species" element={<SpeciesPlants />} />
          </Route>
          <Route
            path="/indoor/species/:plantId"
            element={<PlantDetails data={data} />}
          />
          {/*  <Route path</Route>="care" element={<Care />} />
            <Route path="deseases" element={<Desease />} />
           */}

          <Route path="/outdoor/" element={<OutdoorPlants />} />
          <Route path="/outdoor/species" element={<SpeciesPlants />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
