import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Stack
      direction={'row'}
      justifyContent='flex-end'
      px={'75px'}
      py={'13px'}
      bgcolor='white'
      boxShadow={' 0px 4px 4px rgba(0, 0, 0, 0.03)'}
      zIndex={1}
    >
      <Stack
        direction={'row'}
        alignItems='center'
        gap='8px'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Icon icon='gg:profile' color='#a7a7a7' width='35px' height='35px' />
        <Icon icon='tabler:chevron-down' color='#a7a7a7' width='16px' height='18px' />
      </Stack>
      <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>
  )
}

export default Topbar
