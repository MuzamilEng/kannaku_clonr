import style from './navbar3.module.scss'
import PlaceIcon from '@mui/icons-material/Place'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import NavInput from '../Props/NavInput'
import RoomInput from '../Props/RoomInput'
import { useState } from 'react'

const Navbar3 = () => {
  const [hide, setHide] = useState(false)

  const handleClick = () => {
    setHide(!hide)
  }

  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        {/* profiel section */}
        <div className={style.header_account}>
          <div className={style.profile_pic}>
            <img src={`../../../assets/img/81.png`} alt='profile' className={style.profile_image} />
          </div>
          <div className={style.profile_info}>
            <h4 className={`${style.profile_name} ${style.my_property}`}>AshfakSyem</h4>
            <span className={`${style.profile_email} ${style.my_property}`}>ashfaksyem@gmail.com</span>
          </div>
        </div>

        {/* input container */}
        <div className={style.nav_INput3}>
          <NavInput />
        </div>
        {/* title */}
        <div className={style.hotel_imgcontainer}>
          <img src={`../../../assets/img/images.png`} alt='hotel' className={style.hotel_mainImage} />
        </div>
        <div className={style.hotel_testimonials}>
          <div className={style.testimonial_container}>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/hotel.png`} alt='flight' />
              <p className={style.testimonial_title}>Hotel</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/Flight.png`} alt='flight' />
              <p className={style.testimonial_title}>Flight</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>car</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/Ship.png`} alt='flight' />
              <p className={style.testimonial_title}>Boat</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>Bus</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>Keke</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>Train</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>Bike</p>
            </li>
            <li className={style.testimonial}>
              <img className={style.testmonial_img} src={`../../../assets/img/car.png`} alt='flight' />
              <p className={style.testimonial_title}>Dilevery</p>
            </li>
          </div>
        </div>
        {/* roomsInputs container */}
        {hide ? (
          <div className={style.nav_roomInput3}>
            <RoomInput rooms='Rooms' />
            <RoomInput rooms='Adults (12+ yrs)' />
            <RoomInput rooms='Children (1-12 yrs)' />
            <button className={style.roonInput_button}>Done</button>
          </div>
        ) : null}

        {/* checkin check out section */}
        <div className={style.nav_container}>
          <div className={style.nav_input_lists}>
            <div className={style.booking_info_container}>
              <li className={style.booking_info}>
                <label className={style.booking_info_labels} htmlFor='Your City'>
                  Your City
                </label>
                <br />
                <div className={style.nav_icon_section}>
                  <PlaceIcon className={`${style.loc1} ${style.orange}`} />
                  <input type='text' name='city' placeholder='Thiland' className={style.info_placeholder} />
                </div>
              </li>
              <li className={style.booking_info}>
                <label className={style.booking_info_labels} htmlFor='Your City'>
                  Check in
                </label>
                <br />
                <div className={style.nav_icon_section}>
                  <CalendarMonthIcon className={style.loc1} />
                  <input type='date' name='city' placeholder='01-26-22' className={style.info_placeholder} />
                </div>
              </li>
              <li className={style.booking_info}>
                <label className={style.booking_info_labels} htmlFor='Your City'>
                  Check out
                </label>
                <br />
                <div className={style.nav_icon_section}>
                  <CalendarMonthIcon className={style.loc1} />
                  <input type='date' name='city' placeholder='01-30-22' className={style.info_placeholder} />
                </div>
              </li>
            </div>
            <div className={style.booking_info_container1}>
              <button className={style.nav_search}>Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar3
