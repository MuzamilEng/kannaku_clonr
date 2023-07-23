import { TabList } from '@mui/lab'
import { Tab } from '@mui/material'
import React from 'react'

function Tablist({ setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabList
      orientation='vertical'
      onChange={handleChange}
      aria-label='vertical tabs example'
      color='#353535'
      sx={{
        width: '100%',
        '& .Mui-selected': {
          backgroundColor: '#F0F0F5',
          color: 'black !important',
          borderRight: 0
          // borderLeft: '4px solid #14BEF0'
        },
        '& .MuiTabs-indicator': {
          left: 0,
          backgroundColor: '#14BEF0'
        }
      }}
    >
      <Tab
        value='1'
        label='Medical records'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='2'
        label='Appointments'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='3'
        label='Lab Test'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='4'
        label='Medicine Orders'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='5'
        label='Online Consultations'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='6'
        label='Articles'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='7'
        label='Feedback'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
      <Tab
        value='8'
        label='Payment'
        sx={{
          height: '53px',
          backgroundColor: 'white',
          paddingX: '24px',
          color: '#353535',
          fontWeight: 400,
          fontSize: '14px',
          border: '0.5px solid #C4C4C4'
        }}
      />
    </TabList>
  )
}

export default Tablist
