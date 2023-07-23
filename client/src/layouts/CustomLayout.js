import React from 'react'
// import Layout from 'src/@core/layouts/Layout'
import Layout from '../@core/layouts/Layout'

// ** Hook Import
import { useSettings } from '../@core/hooks/useSettings'
// import AppNavItems from 'src/navigation/app/AppNavItems'
import AppNavItems from '../navigation/app/AppNavItems'

import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import TopBar from './components/patient/TopBar'
import Header from './components/patient/Header'
import { Icon } from '@iconify/react'
function CustomLayout({ children }) {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))
  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }
  if (settings.contentWidth !== 'full') {
    settings.contentWidth = 'full'
  }
  return (
    <>
      <Stack
        height={'252px'}
        maxWidth={'100vw'}
        alignItems='center'
        justifyContent={'center'}
        sx={{ backgroundImage: 'url(/images/pages/header-bg.png)' }}
      >
        <Box display='flex' alignItems={'center'}>
          <Box
            display='flex'
            gap='16px'
            alignItems={'center'}
            py={'13px'}
            px={'28px'}
            bgcolor='white'
            width={'363px'}
            borderRadius={'50px 0% 0% 50px'}
          >
            <Icon icon='material-symbols:location-on' color='#fe180c' />
            <input
              type='text'
              placeholder='Enter your  address'
              style={{ background: 'none', border: 0, outline: 'none', fontSize: '18px' }}
            />
          </Box>
          <button
            style={{
              background: '#FE180C',
              color: 'white',
              textTransform: 'uppercase',
              fontSize: '18px',
              fontWeight: 'bold',
              height: '100%',
              width: '273px',
              border: 0,
              outline: 'none',
              borderRadius: '0px 50px 50px 0px'
            }}
          >
            Find Doctor
          </button>
        </Box>
        <Typography color='white' fontSize={'40px'} fontWeight='700'>
          Your <span style={{ color: '#F61C1C' }}>Doctor</span> at your door.
        </Typography>
      </Stack>
      <Grid container>
        {/* top bar */}
        <TopBar />
        {/* header */}
        <Header />
      </Grid>
      <Box position={'relative'}>
        <Layout
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          verticalLayoutProps={{
            navMenu: {
              navItems: AppNavItems()
            },
            appBar: null
          }}
        >
          {children}
        </Layout>
      </Box>
    </>
  )
}

export default CustomLayout
