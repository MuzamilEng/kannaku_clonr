import style from './navContainer.module.scss'
import PlaceIcon from '@mui/icons-material/Place'

const NavContainer = () => {
  return (
    <div className={style.NavContainer}>
      <div className={style.navWrapper}>
        <div className={style.nav_imageContainer}>
          <img src={`../../../assets/img/images.png`} alt='hotel' className={style.nav_mainImg} />
        </div>
        <div className={style.nav_info}>
          <div className={style.nav_mainTitle}>
            <h1 className={style.nav_Title}>
              Your <span className={style.bg_red}> Parcel </span> Delivered to your door.
            </h1>
          </div>
          <div className={style.nav_Para}>
            <p className={style.nav_paragraph}>Set exact location to find the closest rider near you.</p>
          </div>
          <div className={style.nav_searchInput}>
            <PlaceIcon className={style.bg_red} />
            <input type='text' placeholder='Enter your delivery address' className={style.navInput} />
            <p className={` ${style.rider} ${style.bg_red1}`}>Find delivery rider</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavContainer
