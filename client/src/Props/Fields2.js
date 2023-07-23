import React from 'react'
import style from './fields2.module.scss'

const Fields2 = props => {
  return (
    <div className={style.filter_fields}>
      <div className={style.filter_fields_container}>
        <div style={{fontSize: "1.2rem"}} className={style.pro_types}>
          <div className={style.property_section}>
            <input type='checkbox' name='' id='' className={style.check_buttons} />
            <label htmlFor='property' className={style.propery_label}>
              <span className={style.my_property}>{props.place}</span>
            </label>
            <img src={props.image} alt='' className={style.filter_field_img} />
          </div>
          <div className={style.property_section}>
            <p className={` ${style.quantity} ${style.my_property}`}>{props.value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fields2
