import React from 'react'
import { useEffect,useState } from 'react';
import {fetchData,excerciseOptions} from './../utils/fetchData';
import {Box,Button,Stack, TextField, Typography} from '@mui/material';
import HorizontalScrollbar from '../components/HorizontalScrollbar'
const SearchExcercises = ({excercise,setExcercise,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('');
  const [bodyParts,setBodyParts] = useState([]);
  useEffect(()=>{
    const fetchBodyParts = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchBodyParts();
  },[]);
  const handleSubmit = async ()=>{
    if(search){
      const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);
      // console.log(excercisesData);
      const searchedExcercises = excercisesData.filter((excercise)=>{
        return(
        excercise.name.toLowerCase().includes(search) ||
        excercise.target.toLowerCase().includes(search) ||
        excercise.equipment.toLowerCase().includes(search) ||
        excercise.bodyPart.toLowerCase().includes(search))
      });
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExcercise(searchedExcercises);
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'30px'}}}
        textAlign='center' mb='50x'
      >
        Awesome Excercises you<br/>should know
      </Typography>
      <Box
        position='relative' mb='72px'>
          <TextField
            height='76px'
            value={search}
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            placeholder='Search Excercises'
            type='text'
            sx = {{
              input: {
                fontWeight:700,
                border: 'none',
                borderRadius:'4px'
              },
              width:{lg:'800px',xs:'350px'},
              backgroundColor: '#fff',
              borderRadius: '40px'
            }}
          />
          <Button className='search-btn'
            sx={{
              bgcolor:'#ff2625',
              color: 'ffff',
              textTransform: 'none',
              width: {lg:'175px', xs:'80px'},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              position :'absolute',
              right:0
            }}
            onClick={handleSubmit}
          >
            Search
          </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%', p:'30px'}}>
            <HorizontalScrollbar bodyPart= {bodyPart} setBodyPart={setBodyPart} data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExcercises
