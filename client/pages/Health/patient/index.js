import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import UploadRecordBar from '../../../src/layouts/components/patient/UploadRecordBar'
import Contents from '../../../src/layouts/components/patient/Contents'
import Navbar from '../../../src/Compoment/Navbar'
import DropdownList from '../../../src/Compoment/DropdownList'


function index() {
  return (
   <>
    <Navbar />
   <div className="flex" style={{fontSize: "1.2rem"}}>
    <div className="dp_down">
      <DropdownList />
    </div>
    <div className="w-full_m1">
    <Box
      sx={{
        background: '#E5E5E5',
        minHeight: '100vh'
      }}
    >
      {/* main content */}
      <Grid container backgroundColor='#E5E5E5'>
        {/* Upload record bar */}
        <UploadRecordBar />
        {/* Contents */}
        <Grid item xs={12}>
          <Contents />
        </Grid>
      </Grid>
    </Box>
    </div>
   </div>
   </>
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
