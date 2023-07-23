import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Modalbox from '../_components/modalbox/Modalbox'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Calendar = (props) => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }
    const [startDate, setDate] = useState(new Date()),
        [showCategory, setshowCategory] = useState(false),
        [showmodel, setshowmodel] = useState(false),
        [showEvents, setshowEvents] = useState(false),
        [show, setshow] = useState(false),
        [iseditdelete, setiseditdelete] = useState(false),
        [addneweventobj, setaddneweventobj] = useState(null),
        [isnewevent, setisnewevent] = useState(false),
        [event_title, setevent_title] = useState(""),
        [category_color, setcategory_color] = useState(""),
        [calenderevent, setcalenderevent] = useState(""),
        [weekendsVisible, setweekendsVisible] = useState(true),
        [currentEvents, setscurrentEvents] = useState([]),


        defaultEvents = [{
            title: 'Event Name 4',
            start: Date.now() + 148000000,
            className: 'bg-success'
        },
        {
            title: 'Jhumar Giffar',
            start: Date.now(),
            end: Date.now(),
            className: 'bg-success'
        },
        {
            title: 'Betty Cooper',
            start: Date.now() + 168000000,
            className: 'bg-warning'
        },
        {
            title: 'James JO',
            start: Date.now() + 338000000,
            className: 'bg-danger'
        }]
        ;
    useEffect(() => {
        let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
        elements.map(element => element.classList.add("width-100"))
    }, []);

    const handleChange = (date) => {
        setDate(date)
    }
    const addEvent = () => {
        setshowEvents(true)
    }
    const categoryHandler = () => {
        setshowCategory(true)
    }

    const handleClose = () => {
        setisnewevent(false)
        setiseditdelete(false)
        setshow(false)
        setshowCategory(false)
        setshowEvents(false)
        setshowmodel(false)
    }

    const handleEventClick = (clickInfo) => {
        setiseditdelete(false)
        setevent_title(clickInfo.event.title)
        setcalenderevent(clickInfo.event)
    }

    const handleDateSelect = (selectInfo) => {
        setisnewevent(true)
        setaddneweventobj(selectInfo)
    }
    const addnewevent = () => {
        let calendarApi = addneweventobj.view.calendar

        calendarApi.unselect() // clear date selection

        if (event_title) {
            calendarApi.addEvent({
                id: 10,
                title: event_title,
                className: category_color,
                start: addneweventobj.startStr,
                end: addneweventobj.endStr,
                allDay: addneweventobj.allDay
            })
        }
        setisnewevent(false)
    }

    const onupdateModalClose = () => {
        setiseditdelete(false)
        setevent_title('')
    }
    const oncreateeventModalClose = () => {
        setevent_title("")
        setisnewevent(false)
    }
    const removeevent = () => {
        calenderevent.remove()
        setiseditdelete(false)
    }
    const clickupdateevent = () => {
        const newArray = defaultEvents
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === parseInt(calenderevent.id)) {
                newArray[i].title = event_title
            }
        }
        defaultEvents = newArray
        setiseditdelete(false)
    }

    const handleClick = () => {
        setshow(true)
    }
    console.log("showmodel", showmodel);


    return (


        <>
            <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

                <Header onMenuClick={(value) => toggleMobileMenu()} />
                <Sidebar />
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content container-fluid">

                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Calendar</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/index"><a>Dashboard</a></Link></li>
                                        <li className="breadcrumb-item active">Calendar</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}

                        <div className="row">
                            <div className="col-lg-3 col-md-3 bg-white">
                                <h4 className="card-title mt-2" style={{ color: "#28328C" }}>All Clients</h4>
                                <hr />
                                <h4 style={{ color: "#28328C" }}>Doctors</h4>
                                <div id="calendar-events" className="mb-3">
                                    <div className="calendar-events" ><i className="fas fa-circle text-info"></i> Jhumar Giffar</div>
                                    <div className="calendar-events" ><i className="fas fa-circle text-success"></i> James jo</div>
                                    <div className="calendar-events" ><i className="fas fa-circle text-danger"></i> Betty Cooper</div>
                                    <div className="calendar-events"><i className="fas fa-circle text-warning"></i> Cherly Blossom</div>
                                </div>

                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="card bg-white calendarIndex">
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <input type="text" placeholder='Search Client Name/Id/Phone' className='form-control' />
                                            </div>
                                        </div>
                                        <FullCalendar

                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                            headerToolbar={{
                                                left: 'title',
                                                center: 'prev,next',
                                                right: 'today dayGridMonth,timeGridWeek,timeGridDay',
                                            }}

                                            initialView='dayGridMonth'
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            weekends={weekendsVisible}
                                            initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                                            select={handleDateSelect}
                                            eventClick={clickInfo => handleEventClick(clickInfo)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Modalbox show={showmodel} handleClose={handleClose} />

                    </div>
                </div>
            </div>
        </>


    );

}
export default Calendar;

