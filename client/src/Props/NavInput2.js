import React from 'react'
import style from './navInput.module.scss'
import PlaceIcon from '@mui/icons-material/Place'

const NavInput2 = () => {
  return (
    <div className={style.navInput_container}>
      <div className={style.navInput_wrapper}>
        <PlaceIcon className={style.navInput_icon} />
        <input type='text' placeholder='Enter your delivery address' className={style.navInput_input} />
        <button type='submit' className={style.navInput_input2}>
          FIND DOCTOR
        </button>
      </div>
      <div className={style.navInput_titles}>
        <h2 className={style.hotel_img_title}>
          Your <span className={style.red}> Doctor </span> at your door.
        </h2>
      </div>
    </div>
  )
}

export default NavInput2
