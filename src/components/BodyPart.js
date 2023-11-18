import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({bodyPart,setBodyPart,part}) => {
  return (
    <Stack
        type="button"
        alignItems = 'center'
        justifyContent='center'
        className = 'bodyPart-card'
        sx={{
            borderTop: bodyPart === part ? '4px solid #ff2625' : '',
            backgroundColor:'#fff',
            borderBottomLeftRadius: '20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }}
        onClick={()=>{
            setBodyPart(part);
        }}
    >
      <img src={Icon} alt='dumbell' style={{width:'60px',height:'60px'}} />
      <Typography
        fontSize='24px'
        color= '#3a1212'
        fontWeight='bold'
        textTransform = 'capitalize'
      >{part}</Typography>
    </Stack>
  )
}

export default BodyPart
