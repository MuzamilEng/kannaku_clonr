import style from "./rating.module.css"

const Ratings = (props) => {
  return (
    <div className={style.ratings_wrapper}>
      <div className={style.ratting_wrapper_body}>
        <div className={style.people_ratings}>
          <div className={style.rating_container}>
            <div className={style.rating_section}>
              <div className={style.person_info}>
                <img
                  src={`../../../assets/img/81.png`}
                  alt="profile"
                  className={style.person}
                />
                <p className={` ${style.name_user} ${style.my_property}`}>
                  {props.username}
                </p>
                <span className={` ${style.rating_span} ${style.my_property}`}>
                  {props.date}
                </span>
              </div>
              <div className={style.rating_msg}>
                <img
                  src={`../../../assets/img/star_rating.svg`}
                  alt="ratings"
                  className={style.stars_img}
                />
                <h2 className={` ${style.rating_para_title} ${style.headings}`}>
                  {props.ratingTitle}
                </h2>
                <p className={` ${style.rating_para} ${style.my_property}`}>
                  {props.para}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings
