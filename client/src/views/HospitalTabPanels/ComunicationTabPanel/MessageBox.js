import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

function MessageBox({ defaultValue }) {
  const [open, setOpen] = useState(defaultValue)
  return (
    <>
      <Stack
        direction='row'
        justifyContent={'space-between'}
        alignItems={!open ? 'center' : 'flex-start'}
        px='24px'
        py='9px'
        sx={{
          border: '1px solid #55ACEE',
          filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))',
          borderRadius: '4px'
        }}
      >
        <Box>
          <Typography variant='subtitle2' fontWeight={400} color='black' mb='11px'>
            World Cancer Day
          </Typography>
          <Typography variant='subtitle2' fontWeight={400} color='#545454'>
            8 May 2021 04:00 PM
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' fontWeight={400} color='#545454' mb='11px'>
            Message :
          </Typography>
          <Typography
            variant='subtitle2'
            fontWeight={400}
            color='#545454'
            sx={{
              overflow: !open ? 'hidden' : 'visible',
              maxWidth: '164px',
              width: '100%',
              display: 'inline-block',
              textOverflow: !open ? 'ellipsis' : 'clip',
              whiteSpace: !open ? 'nowrap' : 'wrap'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ullamcorper diam nunc, sit eget fringilla
            ut et commodo. Non in nibh morbi nec non velit eget et quis. Nunc sagittis eu enim platea morbi. Malesuada
            at ultrices vestibulum ultricies orci vitae, aliquam.
          </Typography>
        </Box>
        <Typography variant='subtitle1' fontWeight={600} color='#0FA958'>
          SENT
        </Typography>

        <Box
          onClick={() => setOpen(!open)}
          sx={{ display: 'flex', gap: '11px', cursor: 'pointer', alignItems: 'center' }}
        >
          <Typography variant='subtitle2' fontWeight={600} color='#14BEF0'>
            See More
          </Typography>
          <Icon color='#14BEF0' icon={open ? 'ic:twotone-keyboard-arrow-down' : 'ic:twotone-keyboard-arrow-right'} />
        </Box>

        <Icon icon='mdi:dots-vertical' width={24} height={24} />
      </Stack>
    </>
  )
}

export default MessageBox
