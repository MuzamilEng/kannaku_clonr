import style from './navbar1.module.css'
import NavInput2 from '../Props/NavInput2'
import Link from 'next/link'

const Navbar = () => {

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
        <div className={style.nav_INput1}>
          <NavInput2 />
        </div>
        {/* title */}
        <div className={style.hotel_imgcontainer}>
          <img src={`../../../assets/img/images.png`} alt='hotel' className={style.hotel_mainImage} />
        </div>
        <div className="flex p-3 justify-around">
            <p>Download the app</p>
            <p>Booking Appointment</p>
            <p>Chat with a Doctor</p>
            <p>Order Medicines</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
