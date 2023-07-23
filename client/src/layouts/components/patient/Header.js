import React from 'react'
import { Icon } from '@iconify/react'
import { Menu, MenuItem, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          width: '100%',
          paddingX: '80px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <Typography variant='h4' fontWeight='600' color='#28328C'>
          Logo
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            fontSize: '14px',
            color: 'black'
          }}
        >
          <Box
            id='header-button-1'
            aria-controls={open ? 'header-menu-1' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            For Clinics and Hospital <Icon icon='material-symbols:keyboard-arrow-down' color='#353535' />
          </Box>
          <Menu
            id='header-menu-1'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'header-button-1'
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Box
            id='header-button-2'
            aria-controls={open ? 'header-menu-2' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Jamhur Ghifari <Icon icon='material-symbols:keyboard-arrow-down' color='#353535' />
          </Box>
          <Menu
            id='header-menu-2'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'header-button-2'
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Grid>
  )
}

export default Header
