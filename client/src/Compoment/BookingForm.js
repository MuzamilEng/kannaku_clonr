import { useState } from 'react'
import style from './bookingForm.module.css'
import NavbarRoomInput from './NavbarRoomInput'

const BookingForm = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className={style.Booking_form}>
      <div className={style.Booking_form_container}>
        <div className={style.main3_sidebar}>
          <div className={style.booking_form}>
            <div className={style.total_reviews}>
              <span className={style.points}>4.5</span> Excellent (245 reviesw )
            </div>

            <div className={style.booking_form_inputs1}>
              <input type='date' className={style.booking_inputs} placeholder='Check In' value='Check In' />
              <input type='date' placeholder='Check Out' className={style.booking_inputs} />
            </div>
              <div className={style.booking_form_inputs}>
                <select name='rooms' className={style.select}>
                  <option className={style.switch} value='Rooms / Type'>
                    Rooms Type
                  </option>

                  <option value='small'>Standard room</option>
                  <option value='large'>Dulex room</option>
                  <option value='large'>Premium room</option>
                </select>
              </div>
            <div className={style.booking_form_inputs}>
              <div style={{marginTop: ".7rem", paddingTop: '.3rem'}} className={style.navbarROOM_input}>
              <NavbarRoomInput />
              </div>
              <div className={style.booking_form_inputs}>
                <div className={style.price_information}>
                  <p className={style.price}>
                    <span className={style.bolder}>$210</span>
                  </p>
                  <p className={style.price}>
                    <strike>$250</strike>
                  </p>
                  <p className={style.price}>
                    <span className={style.green}>16% Off!</span>
                  </p>
                  <p className={style.price}> Room/Night</p>
                </div>
              </div>
              <div className={style.booking_form_inputs}>
                <button className={style.book_now}>Book Now</button>
              </div>
              <div className={style.booking_form_inputs}>
                <p className={style.check_time}>
                  <span className={style.bold}>Check In:</span>12:00 pm /<span className={style.bold}>Check Out:</span>
                  11:00 am
                </p>
              </div>
              <div className={style.booked}>
                <p className={style.booked_time}>Last Booked - 18 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingForm
