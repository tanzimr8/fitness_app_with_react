import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Stack,Typography} from '@mui/material'
const ExcerciseCard = ({excercise}) => {
  return (
    <Link className='excercise-card'  to={`/excercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt={excercise.name}/>
      <Stack direction="row"> 
        <Button
            sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px', textTransform:'capitalize'}}
        >
            {excercise.bodyPart}
        </Button>
        <Button
            sx={{ml:'21px',color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px', textTransform:'capitalize'}}
        >
            {excercise.target}
        </Button>
        <Typography fontSize="22px" ml="21px" color="#000" fontWeight="bold" mt='11px' pb="10px" textTransform='capitalize'>
            {excercise.name}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExcerciseCard
