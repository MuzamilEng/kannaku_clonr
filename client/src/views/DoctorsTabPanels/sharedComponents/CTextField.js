import { Box, FormHelperText, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function CTextField(props) {
  const {
    label,
    withLeftComponent = false,
    leftComponentText = '',
    inputText = '',
    placeholder = '',
    helperText = ''
  } = props
  const [content, setContent] = React.useState(inputText)
  return (
    <>
      <Typography variant='caption' color='black' mb='10px'>
        {label}
      </Typography>
      <Stack direction={'row'} mb='32px' maxWidth={'420px'} width='100%' alignItems='stretch'>
        {withLeftComponent && (
          <TextField
            disabled
            defaultValue={leftComponentText}
            id='outlined-start-adornment'
            sx={{
              m: 0,
              maxWidth: '90px',
              color: '#A7A7A7',
              color: 'black',
              '& .MuiInputBase-root': {
                borderRadius: '0px',
                fontSize: '14px !important',
                borderColor: '#C4C4C4'
              }
            }}
          />
        )}
        <Box maxWidth={withLeftComponent ? '330px' : '420px'} width='100%'>
          <OutlinedInput
            {...props}
            id='outlined-start-adornment1'
            placeholder={placeholder}
            value={content}
            aria-describedby='outlined-weight-helper-text'
            onChange={e => setContent(e.target.value)}
            sx={{
              m: 0,
              maxWidth: withLeftComponent ? '330px' : '420px',
              minWidth: '100%',
              width: '100%',
              flex: '1',
              width: 'fit-content',
              color: 'black',
              borderRadius: '0px',
              fontSize: '14px !important',
              borderColor: '#C4C4C4',
              borderLeftColor: withLeftComponent ? 'transparent' : 'inherit',
              '& .MuiInputBase-root': {
                borderRadius: '0px',
                fontSize: '14px !important',
                borderColor: '#C4C4C4',
                borderLeftColor: 'transparent'
              },
              '& label': { display: 'none' }
            }}
          />
          <FormHelperText id='outlined-weight-helper-text'>{helperText}</FormHelperText>
        </Box>
      </Stack>
    </>
  )
}

export default CTextField
