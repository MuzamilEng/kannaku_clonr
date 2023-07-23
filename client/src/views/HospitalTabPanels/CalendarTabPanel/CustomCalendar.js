import React, { useMemo, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { Button, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const CustomToolbar = props => {
  const btns = [
    {
      buttonName: 'Today',
      view: Views.TODAY,
      active: false
    },
    {
      buttonName: 'Month',
      view: Views.MONTH,
      active: false
    },
    {
      buttonName: 'Week',
      view: Views.WEEK,
      active: true
    },
    {
      buttonName: 'Day',
      view: Views.DAY,
      active: false
    }
  ]

  const [buttons, setButtons] = useState(btns)

  const handleViewChange = view => {
    props.onView(view)
  }

  const setActiveBtn = index => {
    btns.forEach((btn, i) => {
      if (index === i) {
        btn.active = true
      }
      if (btn.active && index !== i) {
        btn.active = false
      }
    })
    setButtons([...btns])
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      justifyContent='space-between'
      alignItems={'center'}
      pt='6px'
      className='rbc-toolbar'
    >
      <form style={{ marginTop: '0px', flex: 100 / 3 }} noValidate autoComplete='off'>
        <input
          id='outlined-basic'
          placeholder='Search Client Name / Id / Phone'
          style={{
            marginTop: '0px',
            minWidth: '100%',
            bgcolor: '#F1F1F1',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '7px',
            paddingBottom: '7px',
            borderColor: '#E5E5E5',
            borderRadius: '4px',
            color: '#545454',
            fontSize: '14px',
            background: '#F1F1F1',
            border: '1px solid #E5E5E5',
            borderRadius: '4px'
          }}
        />
      </form>

      <Stack direction='row' flex={100 / 3} spacing={2} justifyContent='center' alignItems={'center'}>
        <Icon icon='bx:chevron-left' color='black' />
        <Typography variant='subtitle2' color='black' fontWeight={600}>
          8 - 13 May 2022
        </Typography>
        <Icon icon='bx:chevron-right' color='black' />
      </Stack>
      <Stack
        direction='row'
        className='rbc-btn-group'
        spacing={2}
        justifyContent='center'
        alignItems={'center'}
        flex={100 / 3}
      >
        {buttons.map((item, i) => (
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setActiveBtn(i)
              handleViewChange(item.view)
            }}
            className={item.active ? 'active' : ''}
            sx={{
              maxWidth: '90px',
              height: '28px',
              textTransform: 'capitalize',
              backgroundColor: 'white',
              borderRadius: '4px !important',
              borderColor: '#C4C4C4',
              '&.active,&:hover': {
                maxWidth: '90px',
                height: '28px',
                borderColor: '#14BEF0 !important',
                bgcolor: '#14BEF0 !important',
                color: 'white !important'
              }
            }}
          >
            {item.buttonName}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
function CustomCalendar() {
  const myEventsList = [
    {
      title: 'Event 1',
      start: new Date('2023-02-20T10:00:00'),
      end: new Date('2023-02-20T12:00:00')
    },
    {
      title: 'Event 2',
      start: new Date('2023-02-22T14:00:00'),
      end: new Date('2023-02-22T16:00:00')
    }
  ]

  const { components, defaultView, localizer, events } = useMemo(
    () => ({
      components: {
        toolbar: CustomToolbar
      },
      defaultView: Views.WEEK,
      localizer: momentLocalizer(moment),
      events: myEventsList
    }),
    []
  )
  return <Calendar localizer={localizer} events={events} components={components} defaultView={defaultView} />
}

export default CustomCalendar
