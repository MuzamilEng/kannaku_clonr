import React, { Fragment, useState } from 'react'
import { Box, Collapse, Typography, Divider } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { topNavigation, userNavigation } from '../../../navigation/hospital'
import { Icon } from '@iconify/react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Link from 'next/link'
import NavList from './NavList'

function Sidebar({ currentPageIndex, handleChange }) {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography variant='h4' color='white' py='10px' textAlign={'center'}>
        Logo
      </Typography>
      {/* <ListItems currentPageIndex={currentPageIndex} /> */}
    <NavList />

      {/* <Tabs
        orientation='vertical'
        onChange={handleChange}
        aria-label='vertical tabs example'
        sx={{ mr: '0px', borderRightWidth: '0px' }}
      >
        {topNavigation?.map((item, i) => {
          if (item.title === 'divider') {
            return <Divider key={i} sx={{ borderColor: '#55ACEE' }} />
          }
          if (item.children && item.children.length) {
            return (
              <List sx={{ width: '100%' }} component='nav' aria-labelledby='nested-list-subheader' key={item.title}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={{ py: 0 }}>
                    <Icon icon={item.icon} color='#C4C4C4' />
                    <ListItemText primary={item.title} sx={{ '& span': { color: '#C4C4C4 !important', ml: '5px' } }} />
                    {(item.children || item.children.length) && (
                      <Icon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
                    )}
                  </ListItemButton>
                </ListItem>

                <Collapse in={open} timeout='auto' unmountOnExit>
                  <TabList
                    orientation='vertical'
                    onChange={handleChange}
                    aria-label='vertical tabs example'
                    sx={{ mr: '0px', borderRightWidth: '0px' }}
                  >
                    {item.children.map((child, i) => (
                      <Tab
                        value={child.value}
                        label={child.title}
                        key={child.title}
                        icon={<Icon icon={child.icon} />}
                        iconPosition='start'
                        sx={{
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          px: '45px',
                          color: currentPageIndex === child.value ? '#FFFFFF !important' : '#C4C4C4 !important',
                          background: currentPageIndex === child.value ? '#14BEF0 !important' : 'transparent !important'
                        }}
                      />
                    ))}
                  </TabList>
                </Collapse>
              </List>
            )
          }
          return (
            <Tab
              value={item.value}
              label={item.title}
              key={item.title}
              icon={<Icon icon={item.icon} />}
              iconPosition='start'
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'left',
                color: currentPageIndex === item.value ? '#FFFFFF !important' : '#C4C4C4 !important',
                background: currentPageIndex === item.value ? '#14BEF0 !important' : 'transparent !important'
              }}
            />
          )
        })}
      </Tabs> */}
    </Box>
  )
}

export default Sidebar
