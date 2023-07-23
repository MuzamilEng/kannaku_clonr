import { Icon } from '@iconify/react'
import { TabPanel } from '@mui/lab'
import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Truncate = ({ text, length }) => {
  if (text.length >= length) {
    return (
      <Typography variant='body2' color='black'>
        {text.substring(0, length) + '...'}
        <Link href='#'>More</Link>
      </Typography>
    )
  }
  return (
    <Typography variant='body2' color='black'>
      {text}
    </Typography>
  )
}

function FeedbackTabPanel() {
  return (
    <TabPanel value='7' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Stack
        width={'100%'}
        height={'100%'}
        spacing={4}
        sx={{
          background: 'white',
          border: '0.5px solid #C4C4C4',
          padding: '32px'
        }}
      >
        {/* Row */}
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
          py='8px'
          pl={'8px'}
          pr='43px'
          border='1px solid #55ACEE'
          borderRadius='4px'
        >
          <Stack direction={'row'} alignItems='center' gap='24px'>
            <img src='/images/avatars/2.png' alt='' />
            <Typography variant='h6' fontWeight={600}>
              Dr. Jamahur Ghifari
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems='center' gap='10px'>
            <Stack direction={'row'}>
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
            </Stack>
            <Typography variant='h6' fontWeight={600}>
              5.0
            </Typography>
          </Stack>
          <Truncate text={'He’s a good Doctor, kind and know well about the.. '} length={48} />

          <Icon icon='mdi:dots-vertical' width={24} />
        </Stack>

        {/* Row */}
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
          py='8px'
          pl={'8px'}
          pr='43px'
          border='1px solid #55ACEE'
          borderRadius='4px'
        >
          <Stack direction={'row'} alignItems='center' gap='24px'>
            <img src='/images/avatars/2.png' alt='' />
            <Typography variant='h6' fontWeight={600}>
              Dr. Jamahur Ghifari
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems='center' gap='10px'>
            <Stack direction={'row'}>
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
            </Stack>
            <Typography variant='h6' fontWeight={600}>
              5.0
            </Typography>
          </Stack>
          <Truncate text={'He’s a good Doctor, kind and know well about the.. '} length={48} />

          <Icon icon='mdi:dots-vertical' width={24} />
        </Stack>

        {/* Row */}
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
          py='8px'
          pl={'8px'}
          pr='43px'
          border='1px solid #55ACEE'
          borderRadius='4px'
        >
          <Stack direction={'row'} alignItems='center' gap='24px'>
            <img src='/images/avatars/2.png' alt='' />
            <Typography variant='h6' fontWeight={600}>
              Dr. Jamahur Ghifari
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems='center' gap='10px'>
            <Stack direction={'row'}>
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
            </Stack>
            <Typography variant='h6' fontWeight={600}>
              5.0
            </Typography>
          </Stack>
          <Truncate text={'He’s a good Doctor, kind and know well about the.. '} length={48} />

          <Icon icon='mdi:dots-vertical' width={24} />
        </Stack>

        {/* Row */}
        <Stack
          direction={'row'}
          alignItems='center'
          justifyContent={'space-between'}
          py='8px'
          pl={'8px'}
          pr='43px'
          border='1px solid #55ACEE'
          borderRadius='4px'
        >
          <Stack direction={'row'} alignItems='center' gap='24px'>
            <img src='/images/avatars/2.png' alt='' />
            <Typography variant='h6' fontWeight={600}>
              Dr. Jamahur Ghifari
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems='center' gap='10px'>
            <Stack direction={'row'}>
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
              <Icon icon='material-symbols:star-rounded' color='#55acee' width={24} height={24} />
            </Stack>
            <Typography variant='h6' fontWeight={600}>
              5.0
            </Typography>
          </Stack>
          <Truncate text={'He’s a good Doctor, kind and know well about the.. '} length={48} />

          <Icon icon='mdi:dots-vertical' width={24} />
        </Stack>
      </Stack>
    </TabPanel>
  )
}

export default FeedbackTabPanel
