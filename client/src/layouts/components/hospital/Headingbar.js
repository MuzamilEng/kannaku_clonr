import { Box } from '@mui/material'
import React from 'react'

function Headingbar({ text }) {
  return <Box sx={{ bgcolor: '#E5E5E5', color: 'black', fontWeight: '600', fontSize: '24px', p: '24px' }}>{text}</Box>
}

export default Headingbar
