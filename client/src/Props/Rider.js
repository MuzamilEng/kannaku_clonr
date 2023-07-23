import style from "./rider.module.scss"
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import GradeIcon from '@mui/icons-material/Grade';
import GppGoodIcon from "@mui/icons-material/GppGood";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const Rider = () => {
  return (
    <div className={style.rider_container}>
      <div className={style.rider_wrapper}>
        {/* find rider section */}
        <div className={style.find_rider}>
          <h1 className={style.findrider_title}>Delivery Rider Finder</h1>
          <div className={style.findrider_input}>
            <div className={style.rider_input_content}>
              <SearchIcon className={style.search_icon_finfer} />
              <input
                type="text"
                placeholder="find your rider"
                className={style.findrider_inputField}
              />
            </div>
            <div className={style.rider_input_content}>
              <TuneIcon className={style.tune_icon} />
            </div>
          </div>
        </div>

        {/* ridre props section */}
        
      
      </div>
    </div>
  );
}

export default Rider

       



// find rider





// rider img




// rider ratings 



// tick icon
