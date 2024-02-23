import React from 'react';
import FirstBoxLanding from  "./components/first_section_landing"
import SecondBoxLanding from './components/second_section_landing';
import ThirdSectionLanding from './components/third_section_landing';
import FourthSectionGallery from './components/fourth_section_gallary';
import SeventhSectionLanding from './components/seven_section_landing';
import {Box} from '@mui/material';
import NineSectionAchievement from './components/nine_section_achievement';
function HomeView() {
  return (
    <main>
      <Box component="section" backgroundColor="primary.main">
        <div className='apply-maxWidth'>
          <FirstBoxLanding/>
        </div>
      </Box>

      <Box backgroundColor="white">
      <div className='apply-maxWidth'>
        <SecondBoxLanding/> 
      </div>
      </Box> 
      <Box>
      <div className='apply-maxWidth'>
        <ThirdSectionLanding/>
      </div>
      </Box> 
      <Box component="section" backgroundColor="white">
        <div className="apply_maxWidth">
          <FourthSectionGallery />
        </div>
      </Box> 
      <Box component="section" sx={{backgroundColor:"primary.main"}}>
      <div className="apply_maxWidth">
        <SeventhSectionLanding/>
      </div>
        </Box>
      <Box >
      <div className="apply_maxWidth">
        <NineSectionAchievement/>
      </div>
      </Box>
        
    </main>
  )
}

export default HomeView;
