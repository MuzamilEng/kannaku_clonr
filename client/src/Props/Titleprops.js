import React from 'react'
import style from './titleProps.module.scss'

const Titleprops = props => {
  return (
    <div className={style.table_form}>
      <div className={style.table_form_body}>
        <div className={style.Description_d}>
          <h4 className={`${style.headings} ${style.des_title}`}>{props.desc}</h4>
        </div>
        <div className={style.Amounts}>
          <div className={style.Description}>
            <h4 className={style.headings}>{props.rate}</h4>
          </div>
          <div className={style.Description}>
            <h4 className={`${style.headings} ${style.amount_titles}`}>{props.amount}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titleprops
