import { useEffect, useState } from 'react'
import style from './roomInput.module.scss'

const RoomInput = () => {
  const [hide, setHide] = useState(false)
  const [rooms, setRooms] = useState(0)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

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
      <li className={style.booking_info}>
        <label className={`${style.booking_info_labels} ${style.room_people1}`} htmlFor='Rooms/People'>
          Rooms/People
        </label>
        <div className={style.nav_icon_section}>
          <p className={style.info_placeholder} onClick={handleClick}>
            {rooms > 0 ? `${rooms} Rooms ` : 'Room'} /{adults > 0 ? `${adults} People` : 'People'}
          </p>
        </div>
      </li>

      {/* fields */}
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

export default RoomInput
