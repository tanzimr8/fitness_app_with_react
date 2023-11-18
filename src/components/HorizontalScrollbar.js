import React,{useContext} from 'react';
import {Box,Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, scrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = ({data,bodyParts,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((part)=>{
        return (
            <Box
                key={part.id || part}
                itemID={part.id || part}
                title = {part.id || part}
                m='0 40px'
            >
                <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} part={part}/>
            </Box>
        )
      })}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
