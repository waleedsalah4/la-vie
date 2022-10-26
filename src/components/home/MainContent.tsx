import React from 'react';
import Box from '@mui/material/Box';
import mainPageImg from '../../assests/home/tree1.png';
// import bow from '../../assests/home/Ellipse.png';
import classes from '../../styles/home/MainContent.module.css';

function MainContent() {
  return (
    <Box component="main" sx={{ pt: 10, pb: 10 }}>
        <div className={classes.container}>
            <div className={classes.mainImg}>
                {/* <div></div> */}
                <img src={mainPageImg} alt='main pic' />
                {/* <img src={bow} alt='img'  className={classes.bow}/> */}
            </div>
            <div className={classes.mainText}>
                <h1 className='text-green font-bold text-xl mb-4' >
                    Perfect way to plant in house
                </h1>
                <p>
                    leaf, in botany, any usually flattened green outgrowth from the stem of
                    a vascular plant.As the primary sites of photosynthesis, 
                    leaves manufacture food for plants,
                    which in turn ultimately nourish and sustain all land animals.
                </p>
                <button className='bg-green py-1 px-5 text-white rounded'>Expolre Now</button>
            </div>
        </div>
    </Box>
  )
}

export default MainContent