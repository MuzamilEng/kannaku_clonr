import style from './resturant.module.css'
import GroupsIcon from '@mui/icons-material/Groups'
import PlaceIcon from '@mui/icons-material/Place'

const Resturant = props => {
  return (
    <div className={style.resturant_container}>
      <div className={style.resturant_container_body}>
        <div className={style.hotel_info_content}>
          <img src={props.img} alt='hotel' className={style.hotel_picture} />
        </div>
        <div className={style.hotel_info_content}>
          <div className={style.hotel_info_content_body}>
            <h2 className={` ${style.hotel2_Title} ${style.heading}`}>{props.hotelT}</h2>
          </div>
          <div className={style.hotel_info_content_body1}>
            <div className={style.my_hotel}>
              <img src={`../../../assets/img/star_rating.svg`} alt='' className={style.star_image} />
              <PlaceIcon className={style.loc_icon} />
              <p className={` ${style.info_paragraph} ${style.my_property}`}>{props.location}</p>
            </div>
          </div>
          <div className={style.hotel_info_content_body}>
            <div className={style.icons_div}>
              <img src={`../../../assets/img/wifi.svg`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/knife.svg`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/glass.svg`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/beach.svg`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/gr_icon.png`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/leaves.svg`} alt='' className={style.image_icons} />
              <img src={`../../../assets/img/gym.svg`} alt='' className={style.image_icons} />
              <input type='text' className={style.couple} value='Couple Friendly' />
            </div>
          </div>
          <div className={style.hotel_info_content_body}>
            <div className={style.total_reviews}>
              <span className={` ${style.points} ${style.my_property}`}>4.5</span> Excellent (245 reviesw )
            </div>
          </div>
          <div className={style.hotel_info_content_body}>
            <p className={` ${style.booked_time} ${style.my_property}`}>Last Booked - 18 hours ago</p>
          </div>
        </div>
        <div className={style.discounts_section}>
          <div className={style.discount_body}>
            <div className={style.discounts_cantents}>
              <p>
                <span className={style.green}>16% Off!</span>
              </p>
            </div>
            <div className={style.discounts_cantents}>
              <p>
                <span className={style.bolder}>$210</span>
              </p>
            </div>
            <div className={style.discounts_cantents}>
              <p className={style.price}>
                <strike>$250</strike>
              </p>
            </div>
            <div className={style.discounts_cantents}>
              <p className={style.price}> Room/Night</p>
            </div>
            <div className={style.discounts_cantents}>
              <button className={style.book_now1}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resturant
