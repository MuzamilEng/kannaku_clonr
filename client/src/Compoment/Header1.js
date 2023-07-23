import style from './header1.module.css'
import SearchIcon from '@mui/icons-material/Search'

const Header1 = () => {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <div className={style.header_logo}>
            <img
              src={`../../../assets/img/Logo.png`}
              alt='bibble'
              className={` ${style.header_logo_img} ${style.my_property} `}
            />
          </div>
          <div className={style.header_input}>
            <SearchIcon className={style.search_icon} />
            {/* <img
              src={`../../../assets/img/search.png`}
              alt="search"
              className={style.search_icon}
            /> */}
            <input type='text' placeholder=' Search here...' className={style.header_input_field} />
          </div>
        </div>
        <div className={style.header_content1}>
          <div className={style.header_menu}>
            <li className={style.header_lists}>
              <a className={`${style.header_links} ${style.my_property}`} href='/about'>
                Home
              </a>
            </li>
            <li className={style.header_lists}>
              <a className={`${style.header_links} ${style.my_property}`} href='/about'>
                About
              </a>
            </li>
            <li className={style.header_lists}>
              <a className={` ${style.header_links} ${style.my_property}`} href='/feature'>
                Feature
              </a>
            </li>
            <li className={style.header_lists}>
              <a className={`${style.header_links} ${style.my_property}`} href='/pricing'>
                Pricing
              </a>
            </li>
            <li className={` ${style.header_lists} ${style.my_property}`}>
              <button className={style.header_login_btn}>Login</button>
            </li>
          </div>
          <div className={style.header_account}>
            <div className={style.profile_pic}>
              <img src={`../../../assets/img/81.png`} alt='profile' className={style.profile_image} />
            </div>
            <div className={style.profile_info}>
              <h4 className={`${style.profile_name} ${style.my_property}`}>AshfakSyem</h4>
              <span className={`${style.profile_email} ${style.my_property}`}>ashfaksyem@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header1
