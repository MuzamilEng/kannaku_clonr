import style from "./merchant.module.scss"
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
const Merchant = () => {
  return (
    <div className={style.Merchant_container}>
      {/* merchant seller */}
      <div className={style.user_field}>
        <div className={style.merchant}>
          <p className={style.sellers}>Are you a Merchant/Seller?</p>
        </div>
        <div className={style.toggle}>
          <ToggleOffIcon className={style.toggle_icon} />
        </div>
      </div>
    </div>
  );
}

export default Merchant
