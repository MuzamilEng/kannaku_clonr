import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Icon } from '@iconify/react'
import { Link, Menu, MenuItem } from '@mui/material'
export default function TopBar() {
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
          display: 'flex',
          width: '100%',
          paddingX: '80px',
          height: '42px',
          backgroundColor: '#FAFAFA',
          border: '2px solid #F1F1F1'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'center'
          }}
        >
          <Icon icon='material-symbols:phone-android-outline-sharp' color='#a7a7a7' />
          <p style={{ color: '#a7a7a7', fontStyle: 500, fontSize: 12 }}>Download the App</p>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 11,
            flex: 1,
            color: '#353535',
            fontStyle: 500,
            fontSize: '12px'
          }}
        >
          <Link href='#' color='inherit' underline='none'>
            Book Appointment
          </Link>
          <Link href='#' color='inherit' underline='none'>
            Chat with a Doctor
          </Link>
          <Link href='#' color='inherit' underline='none'>
            Order Medicines
          </Link>
          <Box
            id='topBar-button'
            aria-controls={open ? 'topBar-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            More <Icon icon='material-symbols:keyboard-arrow-down' color='#353535' />
          </Box>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'topBar-button'
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Link href='#' color='inherit' underline='none'>
            Data Security
          </Link>
        </Box>
      </Box>
    </Grid>
  )
}
