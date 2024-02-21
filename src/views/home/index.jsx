import React from 'react';
import FirstBoxLanding from  "./components/first_section_landing"
import SecondBoxLanding from './components/second_section_landing';
import ThirdSectionLanding from './components/third_section_landing';
import {Box} from '@mui/material';
function HomeView() {
  return (
    <main>
      <Box component="section" backgroundColor="primary.main">
        <div className='apply-maxWidth'>
          <FirstBoxLanding/>
        </div>
      </Box>

      <Box backgroundColor="white">

        <SecondBoxLanding/> 
      </Box> 
      <Box>
        <ThirdSectionLanding/>
      </Box>    
    </main>
  )
}

export default HomeView;
