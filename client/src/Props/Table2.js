import style from './table2.module.scss'

const Table2 = props => {
  return (
    <div className={style.table_form}>
      <div className={style.table_form_body}>
        <div className={style.Description}>
          <p className={style.my_property}>{props.desc}</p>
        </div>
        <div className={style.Amounts}>
          <div className={style.Description}>
            <p className={`${style.my_property} ${style.rate_para_width}`}>{props.rate}</p>
          </div>
          <div className={style.Description1}>
            <p className={`${style.my_property} ${style.amount_titles2}`}>{props.amount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table2
