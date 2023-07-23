import style from './main2.module.css'
import DropdownList from '../../src/Compoment/DropdownList'
import Resturant from '../../src/Props/Resturant'
import Inputs from '../../src/Props/Inputs'
import Navbar1 from '../../src/Compoment/Navbar1'
import RoomInput from '../../src/Props/RoomInput'
import Filter from '../../src/Props/Filter'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Main2 = () => {
  return (
    <div className={style.h2_main}>
      <Navbar1 />
      <div className={style.h2_main_body}>
        <div className={style.dropdown_h2}>
          <DropdownList />
        </div>
        <div className={style.main_2_wrapper}>
          {' '}
          <div className={style.room_Inputs_sections2}>
            <RoomInput />
          </div>
          <div className={style.main2_fields}>
            <div className={style.main2_inpt}>
              <Inputs holder='Enter City / Hotel' img={`../../../assets/img/map.svg`} />
              <Inputs holder='Check In' img={`../../../assets/img/calender.svg`} />
              <Inputs holder='Check Out' img={`../../../assets/img/calender.svg`} />
              <Inputs holder='Rooms / People' img='' />
              <button className={style.blue_search}>Search</button>
            </div>
            <div className={style.main2_wrapper}>
              <div className={style.filter_h2}>
                <Filter />
              </div>
              <div className={style.resturant_h2}>
                <div className={style.amdabad}>
                  <div className={style.amda_para}>
                    <p className={` ${style.incl} ${style.my_property}`}>
                      <span className={` ${style.bold} ${style.my_property}`}>Amdabad: 180 hotels found</span>
                      &nbsp; &nbsp;
                      <span className={` ${style.yellow} ${style.my_property}`}>Price inclusive of taxes</span>
                    </p>
                  </div>
                  <div className={style.sort_input}>
                    <p className={style.my_property}>Sort By:</p>
                    <input type='text' className={` ${style.sorts} ${style.my_property}`} placeholder='Popularity' />
                    <img src={`../../../assets/img/up_down.jpg`} alt='' className={style.updown} />
                  </div>
                </div>
                <Resturant
                  img={`../../../assets/img/hotel (4).jpg`}
                  hotelT='The Orchid Hotel'
                  location='Achram Road, Amdabad'
                />
                <Resturant
                  img={`../../../assets/img/hotel (1).jpg`}
                  hotelT='WishLing Meadows Resort'
                  location='SH Highway, Amdabad'
                />
                <Resturant
                  img={`../../../assets/img/hotel (3).jpg`}
                  hotelT='Readison Blue Hotel'
                  location='Electronic City Amdabad'
                />
                <Resturant
                  img={`../../../assets/img/hotel (5).jpg`}
                  hotelT='Lotus Hotel'
                  location='Airport Zone, Amdabad'
                />
                <Resturant
                  img={`../../../assets/img/hotel (2).jpg`}
                  hotelT='Eulogia Central Resort'
                  location='Samad Highways'
                />
                <div className={style.slider_button}>
                  <div className={style.slider_sections}>
                    <img src={`../../../assets/img/left.jpg`} alt='' className={style.left_slider} />
                    <button className={style.sliders}>1</button>
                    <button className={style.sliders}>2</button>
                    <button className={style.sliders}>3</button>
                    <img src={`../../../assets/img/right.jpg`} alt='' className={style.left_slider} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Main2
