import { FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React from 'react'

function CRadioButton({ label, direction = 'row', defaultValue, radioButtons = [] }) {
  return (
    <>
      <Typography variant='caption' color='black' mb='10px'>
        {label}
      </Typography>
      <Stack direction={'row'} mb='32px' maxWidth={'420px'} width='100%'>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue={defaultValue}
            name='radio-buttons-group'
            row={direction === 'row' ? true : false}
          >
            {radioButtons.length &&
              radioButtons.map(el => (
                <FormControlLabel sx={{ fontSize: '12px' }} value={el.value} control={<Radio />} label={el.label} />
              ))}
          </RadioGroup>
        </FormControl>
      </Stack>
    </>
  )
}

export default CRadioButton
