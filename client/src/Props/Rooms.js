import style from './room.module.css'
import HotelIcon from '@mui/icons-material/Hotel'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const Rooms = props => {
  return (
    <div className={style.h3_rooms_container}>
      <div className={style.h3_rooms_body}>
        <div className={style.room_wrapper}>
          <div className={style.room_img_container}>
            <img src={props.img} alt='room' className={style.room_image} />
          </div>
          <div className={style.room_statics}>
            <h1 className={` ${style.logo_room} ${style.headings}`}>{props.roomTitle}</h1>
            <div className={style.statistics}>
              <div className={style.statics_content}>
                <li className={style.statics_icons}>
                  <HotelIcon className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.bedSize}</p>
                </li>
                <li className={style.statics_icons}>
                  <img src={`../../../assets/img/green1.png`} alt='search' className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.bathHub}</p>
                </li>
                <li className={style.statics_icons}>
                  <img src={`../../../assets/img/green1.png`} alt='search' className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.airCondition}</p>
                </li>
              </div>
              <div className={style.statics_content}>
                <li className={style.statics_icons}>
                  <AcUnitIcon className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.roomSize}</p>
                </li>
                <li className={style.statics_icons}>
                  <img src={`../../../assets/img/green1.png`} alt='search' className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.tv}</p>
                </li>
                <li className={style.statics_icons}>
                  <img src={`../../../assets/img/green1.png`} alt='search' className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.tea}</p>
                </li>
              </div>
              <div className={style.statics_content}>
                <li className={style.statics_icons}>
                  <img src={`../../../assets/img/green1.png`} alt='search' className={style.bed_icons} />
                  <p className={` ${style.bed_info} ${style.my_property}`}>{props.dryer}</p>
                </li>
              </div>
            </div>
            <div className={style.price_information}>
              <p className={style.price}>
                <span className={` ${style.bolder} ${style.my_property}`}>{props.price}</span>
              </p>
              <p className={` ${style.price} ${style.bold}`}>
                <strike>{props.discount}</strike>
              </p>
              <p className={style.price}>
                <span className={` ${style.green} ${style.bolder} ${style.my_property}`}>{props.off}</span>
              </p>
              <p className={` ${style.price} ${style.my_property}`}>{props.stayTime}</p>
            </div>
            <div className={style.room_btn_section}>
              <p className={style.consult}>Consultation Policy</p>
              <button className={` ${style.select_room} ${style.my_property}`}>Select Room</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms
