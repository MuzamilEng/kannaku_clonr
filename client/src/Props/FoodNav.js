import style from "./foodNav.module.scss";
const FoodNav = (props) => {
  return (
    <div className={style.foodnav_container}>
      <div className={style.foodnav_wrapper}>
        <div className={style.foodnav_content1}>
          <img src={props.img} alt="nav_img" className={style.foodnav_img} />
        </div>
        <div className={style.foodnav_content}>
          <h3 className={style.foodnav_title}>{props.title}</h3>
          <botton className={style.foodnav_btn}>{props.btn}</botton>
        </div>
      </div>
    </div>
  );
};

export default FoodNav;
{/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-paper-plane" />; */}