import React from 'react';
import style from './filter.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icon } from '@iconify/react';
import Slider from '../Compoment/Slider';
import Fields from './Fields';
import Fields2 from './Fields2';

const Filter = () => {
  return (
    <div className={style.filter_sections}>
    <div className={style.filter_sections_container}>
      <div className={style.filter_content}>
        <h1 style={{fontSize: "1.7rem"}} className={`${style.headings} ${style.blue}`}>Filter</h1>
      </div>
      <div className={style.filter_content1}>
        <div className={style.price_align}>
          <h2 style={{fontSize: "1.2rem"}} className={`${style.headings} ${style.blue}`}>Hotel Name</h2>
          <KeyboardArrowDownIcon className={style.blue_arrow} />
        </div>
        <div className={`${style.content_body} ${style.filter_hotel}`}>
          <input style={{fontSize: "1.2rem"}}
            type='text'
            className={`${style.content_input} ${style.my_property}`}
            placeholder='Search by Hotel Name'
          />
          <img src={'../../../assets/img/search5.png'} alt='' className={style.search_filter} />
        </div>
      </div>
      <div className={style.filter_content1}>
        <div className={style.price_align}>
          <h2 style={{fontSize: "1.5rem"}} className={`${style.headings} ${style.blue}`}>Price</h2>
          <KeyboardArrowDownIcon alt='' className={style.blue_arrow} />
        </div>
        <div className={style.content_body2}>
          <h3 style={{fontSize: "1.2rem"}} className={`${style.headings} ${style.grey} ${style.large}`}>$125 - $980</h3>
          {/* <input type="range" min="0" max="100" width={'300px'}/> */}
          <Slider />
        </div>
      </div>
    </div>
    <div className={style.filter_content_section}>
      <h3 style={{fontSize: "1.5rem"}} className={`${style.headings} ${style.blue} ${style.pr_type}`}>Property Types</h3>
      <KeyboardArrowDownIcon alt='' className={style.blue_arrow} />
    </div>
    <div className={style.fields}>
      <Fields place='Hotel' value='250' />
      <Fields place='Resort' value='76' />
      <Fields place='Vila' value='89' />
      <Fields place='Heritage' value='12' />
      <Fields place='Motel' value='63' />
      <Fields place='Guest House' value='45' />
      <Fields place='Farm House' value='67' />
      <Fields place='Palace' value='120' />
      <Fields place='Serviced Apartments' value='44' />
    </div>
    <div className={style.filter_content_section}>
      <h3 style={{fontSize: "1.5rem"}} className={`${style.headings} ${style.blue}`}>Star Category</h3>
      <KeyboardArrowDownIcon alt='' className={style.blue_arrow} />
    </div>
    <div className={style.fields}>
      <Fields place='5 Star' image='⭐️⭐️⭐️⭐️⭐️' value='250' />
      <Fields place='4 Star' image='⭐⭐⭐⭐' value='76' />
      <Fields place='3 Star' image='⭐⭐⭐' value='89' />
      <Fields place='2 Star' image='⭐⭐' value='12' />
      <Fields place='1 Star' image='⭐' value='63' />
    </div>
    <div className={style.filter_content_section}>
      <h3 style={{fontSize: "1.5rem"}} className={`${style.headings} ${style.blue}`}>User Reviews</h3>
      <KeyboardArrowDownIcon alt='' className={style.blue_arrow} />
    </div>
    <div className={style.fields}>
      <Fields place='Excellent' value='250' />
      <Fields place='Good' value='76' />
      <Fields place='Fair' value='89' />
      <Fields place='Poor' value='12' />
      <Fields place='Bad' value='63' />
    </div>
    <div className={style.filter_content_section}>
      <h3 style={{fontSize: "1.5rem"}} className={`${style.headings} ${style.blue}`}>Amenities</h3>
      <KeyboardArrowDownIcon alt='' className={style.blue_arrow} />
    </div>
    <div className={style.fields}>
      <Fields2 place='Internet/Wifi' image={'../../../assets/img/wifi.svg'} value='250' />
      <Fields2 place='Restaurant' image={'../../../assets/img/knife.svg'} value='76' />
      <Fields2 place='Bar' image={'../../../assets/img/glass.svg'} value='89' />
      <Fields2 place='Swimming Pool' image={'../../../assets/img/beach.svg'} value='12' />
      <Fields2 place='Business Facilities' image={'../../../assets/img/business.svg'} value='63' />
      <Fields2 place='Spa/Wellness' image={'../../../assets/img/leaves.svg'} value='63' />
      <Fields2 place='Gym' image={'../../../assets/img/gym.svg'} value='63' />
    </div>
  </div>
  )
}

export default Filter
