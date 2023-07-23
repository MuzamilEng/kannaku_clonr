import React from 'react'
import style from './input.module.css'

const Inputs = props => {
  return (
    <div className={style.Inputs_container}>
      <div className={style.inputs_container_body}>
        <div className="flex">
          <input className={` ${style.main2_input} ${style.my_property}`} placeholder={props.holder} onChange={props.onChange} />
          <img src={props.img || ""} alt='' className={style.main2_input_img} />
        </div>
      </div>
    </div>
  )
}

export default Inputs
