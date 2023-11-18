import React,{useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from './../components/Herobanner'
import SearchExcercises from './../components/SearchExcercises'
import Excercises from './../components/Excercises'

const Home = () => {
  const [excercise,setExcercise] = useState([]);
  const [bodyPart,setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises 
        excercise={excercise} 
        setExcercise={setExcercise} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
      <Excercises
        excercise={excercise} 
        setExcercise={setExcercise} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home
