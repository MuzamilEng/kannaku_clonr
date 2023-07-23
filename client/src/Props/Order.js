import style from "./order.module.scss"
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const Order = () => {
  return (
    <div className={style.order_container}>
      <div className={style.order_wrapper}>
        {/* order detail */}
        <div className={style.user_field}>
          <div className={style.order}>
            <CompareArrowsIcon className={style.toggle_icon0} />
            <h5 className={`${style.sellers} ${style.grey}`}>Return Order</h5>
          </div>
          <div className={style.toggle}>
            <ToggleOffIcon className={style.toggle_icon} />
          </div>
        </div>
        {/* shedule */}
        <p className={style.shedule}>Schedule</p>
        {/* right away */}

        <div className={style.right_away}>
          <div className={style.right_awayContent}>
            <TripOriginIcon className={style.circle1} />
            <p className={style.Rightaway}>Right Away!</p>
          </div>
          <div className={style.right_awayContent1}>
            <TripOriginIcon className={style.circle2} />
            <p className={style.Rightaway}>Schedule for later</p>
          </div>
        </div>
        <p className={style.shedule}>Order Type</p>

        {/* one thing */}
        <div className={style.right_away}>
          <div className={style.right_awayContent}>
            <TripOriginIcon className={style.circle1} />
            <p className={style.Rightaway}>It's a one time thing!</p>
          </div>
          <div className={style.right_awayContent1}>
            <TripOriginIcon className={style.circle2} />
            <p className={style.Rightaway}>Recurring Order</p>
          </div>
        </div>
        {/* select vehicle type */}
        <button className={style.vehicle}>Click to select a vehicle type</button>
      </div>
    </div>
  );
}

export default Order
