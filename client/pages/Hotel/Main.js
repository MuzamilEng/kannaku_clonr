import DropdownList from '../../src/Compoment/DropdownList'
import style from './main.module.css'
import Groups2Icon from '@mui/icons-material/Groups2'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift'
import RoomInput from '../../src/Props/RoomInput'
import Sidebar from '../../layouts/Sidebar'

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_body}>
        <div className={style.sidebars1}>
        <DropdownList />
        </div>
        <div className={style.main_content}>
          <div className={style.room_Inputs_sections}>
            <RoomInput />
          </div>
          <div className={style.main_content_body}>
            <div className={style.main_featured_content}>
              <div className={style.main_content_logo}>
                <h1 className={style.popular_imgcontent_title}>Featured Offers</h1>
                <p className={style.content_para}>Get Best Offers & Discounts</p>
              </div>
              <div className={style.offer_info}>
                <img src={`../../../assets/img/hotel13.jpg`} alt='hotel' className={style.offer_img} />
                <img src={`../../../assets/img/hotel10.jpg`} alt='hotel' className={style.offer_img} />
              </div>
            </div>
            <div className={style.main_popular_content}>
              <div className={style.popular}>
                <h1 className={` ${style.popular_imgcontent_title}${style.headings}`}>Popular Destinations</h1>
                <p className={`${style.content_para} ${style.my_property}`}>
                  Explore these places and other things here
                </p>
              </div>
              <div className={style.popular_places}>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (4).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={`${style.place_name} ${style.my_property}`}>India</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (5).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={` ${style.place_name} ${style.my_property}`}>London</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (2).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={` ${style.place_name} ${style.my_property}`}>Bangkok</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (4).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={` ${style.place_name} ${style.my_property}`}>Newyork</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (3).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={` ${style.place_name} ${style.my_property}`}>Singapore</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
                <div className={style.places_container}>
                  <img src={`../../../assets/img/hotel (5).jpg`} alt='hotel' className={style.popular_img} />
                  <p className={` ${style.place_name} ${style.my_property}`}>Dubai</p>
                  <p className={` ${style.properties} ${style.my_property}`}>21345 properties</p>
                </div>
              </div>
            </div>

            {/* curated hotels */}
            <div className={style.main_curated_content}>
              <div className={style.curated_hotels}>
                <h1 className={` ${style.popular_imgcontent_title} ${style.headings}`}>Curated Hotels for you</h1>
                <p className={` ${style.content_para} ${style.my_property}`}>
                  Explore our collection to find that perfect gateway
                </p>
              </div>
              <div className={style.curated_hotel_container}>
                <div className={style.curated_container}>
                  <div className={style.images_h1_container}>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel (4).jpg`} alt='hotel' className={style.curated_img} />
                    </div>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel9.jpg`} alt='' className={style.h1_cura_img} />
                      <img src={`../../../assets/img/hotel10.jpg`} alt='' className={style.h1_cura_img} />
                    </div>
                  </div>
                  <div className={style.align}>
                    <p className={` ${style.place_name} ${style.my_property} ${style.bold_h1}`}>
                      Sea view hotels in India
                    </p>
                    <p className={` ${style.properties} ${style.my_property}`}>212 properties avaible</p>
                  </div>
                </div>
                {/* 2nd */}
                <div className={style.curated_container}>
                  <div className={style.images_h1_container}>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel (3).jpg`} alt='hotel' className={style.curated_img} />
                    </div>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel9.jpg`} alt='' className={style.h1_cura_img} />
                      <img src={`../../../assets/img/hotel10.jpg`} alt='' className={style.h1_cura_img} />
                    </div>
                  </div>
                  <div className={style.align}>
                    <p className={` ${style.place_name} ${style.my_property} ${style.bold_h1}`}>
                      Sea view hotels in India
                    </p>
                    <p className={` ${style.properties} ${style.my_property}`}>212 properties avaible</p>
                  </div>
                </div>
                {/* 3rd */}
                <div className={style.curated_container}>
                  <div className={style.images_h1_container}>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel (5).jpg`} alt='hotel' className={style.curated_img} />
                    </div>
                    <div className={style.h1_img_section}>
                      <img src={`../../../assets/img/hotel9.jpg`} alt='' className={style.h1_cura_img} />
                      <img src={`../../../assets/img/hotel10.jpg`} alt='' className={style.h1_cura_img} />
                    </div>
                  </div>
                  <div className={style.align}>
                    <p className={` ${style.place_name} ${style.my_property} ${style.bold_h1}`}>
                      Sea view hotels in India
                    </p>
                    <p className={` ${style.properties} ${style.my_property}`}>212 properties avaible</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.choose_container}>
              <h1 className={`${style.choose_title}${style.headings}`}>Why Choose Us</h1>
              <p className={` ${style.content_para} ${style.my_property}`}>Book Hotels Online. Save Time and Money!</p>
            </div>
            <div className={style.main_footer}>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <Groups2Icon className={style.footer_logo3} />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4 className={`${style.footer_content_title}${style.headings}`}>10M+ Happy Costumers</h4>
                  <p className={` ${style.choose_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the world
                  </p>
                </div>
              </div>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <AttachMoneyIcon className={style.footer_logo3} />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4 className={` ${style.footer_content_title}${style.headings}`}>Lowest Price Garantee</h4>
                  <p className={`${style.choose_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the world
                  </p>
                </div>
              </div>
              <div className={style.footer_main}>
                <div className={style.footer_content}>
                  <div className={style.footer_logo_container}>
                    <FilterTiltShiftIcon className={style.footer_logo3} />
                  </div>
                </div>
                <div className={style.footer_content}>
                  <h4 className={`${style.footer_content_title}${style.headings}`}>24X7 Support</h4>
                  <p className={` ${style.choose_para} ${style.my_property}`}>
                    Block with one of the most trusted travel partials in the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
