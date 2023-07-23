import style from "./address.module.scss"
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlaceIcon from "@mui/icons-material/Place";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Address = (props) => {
  return (
    <div className={style.Address_container}>
      <div className={style.address_container_body}>
        <div className={style.address_Title}>{props.title}</div>
        {/* user inputs */}
        <div className={style.user_field}>
          <div className={style.user_field_detail}>
            <ArrowRightIcon className={style.arrow_right} />
            <input
              className={style.section_input}
              placeholder="First Name"
              value={props.name}
            />
          </div>
          <div className={style.user_field_detail}>
            <ArrowRightIcon className={style.arrow_right} />
            <input
              className={style.section_input}
              placeholder="Family Name"
              value={props.username}
            />
          </div>
        </div>
        {/* user address */}
        <div className={style.user_field}>
          <div className={style.user_field_detail}>
            <ArrowRightIcon className={style.arrow_right} />
            <input
              className={style.section_input}
              placeholder="place your address"
              value={props.address}
            />
          </div>
          <div className={style.user_field_detail1}>
            <PlaceIcon className={style.green_map} />
          </div>
        </div>
        {/* landmark */}
        <div className={` ${style.user_field_detail} {style.landmark} `}>
          <ArrowRightIcon className={style.arrow_right} />
          <input
            className={style.section_input}
            placeholder="LandMark"
            value={props.landmark}
          />
        </div>
        {/* number and email */}
        <div className={style.user_field}>
          <div className={style.user_field_detail}>
            <img
              src={`../../../assets/img/nigeria_flag.svg`}
              alt="country"
              className={style.ng_flag}
            />
            <ArrowDropDownIcon className={style.arrow_right1} />
            <input
              className={style.section_input}
              placeholder="enter phone number"
              value={props.value}
            />
          </div>
          <div className={style.user_field_detail}>
            <ArrowRightIcon className={style.arrow_right} />
            <input
              className={style.section_input}
              placeholder="enter your email"
              value={props.value}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Address;
