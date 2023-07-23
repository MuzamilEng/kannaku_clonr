import style from "./riderCard.module.scss"
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import GradeIcon from '@mui/icons-material/Grade';
import GppGoodIcon from "@mui/icons-material/GppGood";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const RiderCard = () => {
  return (
    <div className={style.Rider_Card}>
      <div className={style.rider_Containers}>
        <div className={style.rider_Card_section}>
          <div className={style.cards_section}>
            <img
              src={`../../../assets/img/81.png`}
              alt="profile"
              className={style.riderImage}
            />
          </div>
          <div className={style.cards_section2}>
            <div className={style.cards_section2_content}>
              <div className={style.cardContent_section}>
                <h4 className={style.rider_name}>Ashfaq Syem</h4>
                <p className="rider_time">ABD Deliveries Limited</p>
              </div>
              {/* button */}
              <div className={style.riderSection_content1}>
                <button className={style.book_rider}>Book Rider</button>
              </div>
            </div>
            {/* rating */}

            <div className={style.rider_ratings}>
              <GradeIcon className={style.star} /> <span>5.0</span>
              <ThumbUpIcon className={style.likes} /> <span>30</span>
              <ThumbDownAltIcon className={style.dislikes} /> <span>3</span>
              <span>33 Reviews</span>
            </div>

            <div className={style.item_deliver}>
              <GppGoodIcon className={style.gapgood} />
              <p className={style.delivered_para}>
                33 Cosmutmer items Delivered
              </p>
            </div>

            <div className={style.delivery_time}>
              <PlaceIcon className={style.del_map} /> <span>2.3KM</span>
              <AccessTimeFilledIcon className={style.del_times} />{" "}
              <span>30Mins</span>
              <CheckBoxIcon className={style.del_available} />{" "}
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderCard
