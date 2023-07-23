import style from "./ratingBord.module.css"
const RatingBord = () => {
  return (
    <div className={style.rating_scorebord}>
      <div className={style.row}>
        <div className={style.side}></div>
        <div className={style.middle}>
          <div className={style.bar_container}>
            <div className={style.bar_5}></div>
          </div>
        </div>
        <div className={`${style.side} ${style.right}`}>
          <div className={style.exe}>Excellent</div>
        </div>
        <div className={style.side}></div>
        <div className={style.middle}>
          <div className={style.bar_container}>
            <div className={style.bar_4}></div>
          </div>
        </div>
        <div className={`${style.side} ${style.right}`}>
          <div className={style.exe}>Good</div>
        </div>
        <div className={style.side}></div>
        <div className={style.middle}>
          <div className={style.bar_container}>
            <div className={style.bar_3}></div>
          </div>
        </div>
        <div className={`${style.side} ${style.right}`}>
          <div className={style.exe}>Fair</div>
        </div>
        <div className={style.side}></div>
        <div className={style.middle}>
          <div className={style.bar_container}>
            <div className={style.bar_2}></div>
          </div>
        </div>
        <div className={`${style.side} ${style.right}`}>
          <div className={style.exe}>Poor</div>
        </div>
        <div className={style.side}></div>
        <div className={style.middle}>
          <div className={style.bar_container}>
            <div className={style.bar_1}></div>
          </div>
        </div>
        <div className={`${style.side} ${style.right}`}>
          <div className={style.exe}>Bad</div>
        </div>
      </div>
    </div>
  );
}

export default RatingBord
