import style from "./navList.module.scss"


const navList = (props) => {
  return (
    <div className={style.navList_wrapper}>
      <div className={style.navList_container}>
          <li className={style.testimonial}>
            <img
              className={style.testmonial_img}
              src={props.img}
              alt="navlist"
            />
            <p className={style.testimonial_title}>{props.title}</p>
          </li>
      </div>
    </div>
  );
}

export default navList
