import React,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box,Typography,Stack} from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';
const Excercises = ({excercise,setExcercise,bodyPart,setBodyPart}) => {
  return (
    <Box id="excercises"
      sx={{
        mt:{lg:'110px'}
      }}
      mt="50px"
      p="10pz"
    >
      <Typography variant='h3' mb="46px">
        Showing results
      </Typography>
      <Stack
        sx={{gap:{lg:'110px',xs:'50px'}}}
        flexWrap='wrap'
        direction='row'
        justifyContent='center'
      >
        {excercise.map((excerciseItem,index)=>{
          return <ExcerciseCard
            key={index}
            excercise = {excerciseItem}
          />
        })}
      </Stack>
      <Stack
        mt='100px'
        alignItems='center'
      >
        {excercise.length > 9 && (
          <Pagination 
            color='standard'
            shape='rounded'
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Excercises
