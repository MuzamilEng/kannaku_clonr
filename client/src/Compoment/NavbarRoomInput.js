import { useState } from 'react'
import style from './navbarRoomInput.module.scss'

const NavbarRoomInput = () => {
  const [hide, setHide] = useState(false)
  const [rooms, setRooms] = useState(0)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState()

  const handleClick = () => {
    setHide(!hide)
  }

  const handleRoomsAdd = () => {
    setRooms(rooms + 1)
  }

  const handleRoomsSubtract = () => {
    if (rooms > 0) {
      setRooms(rooms - 1)
    }
  }

  const handleAdultsAdd = () => {
    setAdults(adults + 1)
  }

  const handleAdultsSubtract = () => {
    if (adults > 0) {
      setAdults(adults - 1)
    }
  }

  return (
    <div className={style.roomInput_container}>
      {/* fields */}
      <p className={style.switch1} onClick={handleClick}>
        {rooms > 0 ? `${rooms} Rooms ` : 'Room'} /{adults > 0 ? `${adults} People` : 'People'}
      </p>
      {hide ? (
        <div className={style.nav_roomInput}>
          <div className={style.roomsInput_wrapper}>
            <div className={style.roomInput_section}>
              <span className={style.room_name}>Rooms</span>
            </div>
            <div className={style.roomInput_section}>
              <p className={style.room_quantity}>
                <span className={style.add} onClick={handleRoomsSubtract}>
                  -
                </span>
                {rooms}
                <span className={style.add} onClick={handleRoomsAdd}>
                  +
                </span>
              </p>
            </div>
          </div>
          <div className={style.roomsInput_wrapper}>
            <div className={style.roomInput_section}>
              <span className={style.room_name}>Adults (12+ yrs) </span>
            </div>
            <div className={style.roomInput_section}>
              <p className={style.room_quantity}>
                <span className={style.add} onClick={handleAdultsSubtract}>
                  -
                </span>
                {adults}
                <span className={style.add} onClick={handleAdultsAdd}>
                  +
                </span>
              </p>
            </div>
          </div>
          {/* children */}
          <div className={style.roomsInput_wrapper}>
            <div className={style.roomInput_section}>
              <span className={style.room_name}>Children (1 - 12yrs) </span>
            </div>
            <div className={style.roomInput_section}>
              <p className={style.room_quantity}>
                <span className={style.add} onClick={handleAdultsSubtract}>
                  -
                </span>
                {children}
                <span className={style.add} onClick={handleAdultsAdd}>
                  +
                </span>
              </p>
            </div>
          </div>
          <button className={style.roonInput_button}>Done</button>
        </div>
      ) : null}
    </div>
  )
}

export default NavbarRoomInput
