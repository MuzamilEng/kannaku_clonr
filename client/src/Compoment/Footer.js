import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_mainImg}>
          <img
            src={`../../../assets/img/Rectangle.png`}
            alt="footer"
            className={style.footer_img}
          />
        </div>
        <div className={style.mobile_icons}>
          <img
            src={`../../../assets/img/phone.png`}
            alt="android"
            className={style.mobile}
          />
        </div>
        <div className={style.stores}>
          <p className={style.download_info}>
            Download our app to order parcel & sorts of delivery service from
            your favourite shops
          </p>
          <div className={style.stores_icon}>
            <img
              src={`../../../assets/img/Bitmap.png`}
              alt="apple"
              className={style.applestore}
            />
            <img
              src={`../../../assets/img/playstore.png`}
              alt="play"
              className={style.playstore}
            />
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Footer
