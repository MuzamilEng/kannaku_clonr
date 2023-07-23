import { Button } from '@mui/material'
import React from 'react'

function CButton(props) {
  const { children, bgColor = '#F0DA14', maxWidth = '420px' } = props
  return (
    <Button
      {...props}
      variant='contained'
      fullWidth
      icon={'/svg/lightbulb.svg'}
      sx={{
        maxWidth,
        background: bgColor,
        borderRadius: '4px',
        border: bgColor === 'white' ? '2px solid #C4C4C4' : '2px solid #F0DA14 !important',
        color: bgColor === 'white' ? 'black' : 'white',
        py: '15px',
        textTransform: 'capitalize',
        boxShadow: 'none',

        '&:hover': {
          background: bgColor === 'white' ? 'white' : '#F0DA14'
        }
      }}
    >
      {children}
    </Button>
  )
}

export default CButton
