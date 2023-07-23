import { MenuItem, Select, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

function CSelect({ label, placeholder, initItems = [] }) {
  const [value, setValue] = useState('')
  const [items, setItems] = useState(initItems)

  return (
    <>
      <Typography variant='caption' color='black' mb='10px'>
        {label}
      </Typography>
      <Stack direction={'row'} mb='32px' maxWidth={'420px'} width='100%'>
        <Select
          id='demo-simple-select'
          value={value}
          onChange={e => setValue(e.target.value)}
          displayEmpty
          sx={{
            m: 0,
            flex: '1',
            color: 'black',
            borderRadius: '0px !important',
            fontSize: '14px !important',
            borderColor: '#C4C4C4'
          }}
        >
          <MenuItem value=''>{placeholder}</MenuItem>
          {/* {items.length && items.map((el, i) => <MenuItem value={el}>{el}</MenuItem>)} */}
        </Select>
      </Stack>
    </>
  )
}

export default CSelect
