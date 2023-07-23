import style from './main4.module.css'
import DropdownList from '../../src/Compoment/DropdownList'
import TableInput from '../../src/Props/TableInput'
import Table2 from '../../src/Props/Table2'
import PrintIcon from '@mui/icons-material/Print'
import DownloadIcon from '@mui/icons-material/Download'
import Titleprops from '../../src/Props/Titleprops'
import RoomInput from '../../src/Props/RoomInput'

const Main4 = () => {
  const handleChange = () => {
    console.log('changed');
  }
  return (
    <div className={style.main4}>
      <div style={{fontSize: "1.2rem"}} className={style.main4_container}>
        <div className={style.dropdown_hotel4}>
          <DropdownList />
        </div>
        <div className={style.main4_form}>
          <div className={style.room_Inputs_sections4}>
            <RoomInput />
          </div>
          <div className={style.form4_body}>
            <div className={style.form4_inputs}>
              <div className={style.from4_title}>
                {/* <h1 className={` ${style.form4_Title} ${style.grey}  ${style.headings}`}>Quickai</h1> */}
                <img src={`../../../assets/img/app_logo.png`} alt='quickai' className='app_logo1' />
              </div>
              <div className={style.invoice}>
                <h1 className={` ${style.invoice_title}${style.grey}  ${style.headings}`}>Invoice</h1>
                <p className={`$ {style.invoice_number} ${style.my_property}`}>Invoice Number - 16583</p>
              </div>
            </div>
            <div className={style.form4_inputs}>
              <div className={style.guest_info}>
                <label htmlFor='username '>
                  <span className={`${style.my_property} ${style.bold}`}>Guest Name: </span>
                </label>
                <p className={`${style.username} ${style.my_property}`}>Neil Patel</p>
              </div>
              <div className={style.guest_info}>
                <label htmlFor='date'>
                  <span className={` ${style.my_property} ${style.bold}`}>Booking Date:</span>
                </label>
                <p className={`${style.booking} ${style.date}  ${style.my_property}`}>07/11/2019</p>
              </div>
            </div>
            <div className={style.form_inputs_details}>
              <div className={style.hotel_details}>
                <div className={style.detail_content}>
                  <div className={style.hotel_detail}>
                    <h2 className="p-2 text-xl font-bold mb-2">Hotel Details:</h2>
                    <p className={` ${style.hotel_location} ${style.my_property}`}>
                      The Orchid Hotel <br />
                      Polat No.3 Nr.HDFC Bank, Ashram Road <br />
                      Amedabad, Gujrat, India
                    </p>
                  </div>
                </div>
                <div className={style.detail_content}>
                  <div className={style.chechIn}>
                    <h4 className={` ${style.check_in} ${style.my_property} ${style.bold}`}>Check In:</h4>
                    <p className={` ${style.checkin_date} ${style.my_property}`}>07/11/2019</p>
                  </div>
                  <div className={style.bookingId}>
                    <h4 className={`${style.booking_id} ${style.my_property} ${style.bold}`}>Booking ID:</h4>
                    <p className={`${style.checkin_date} ${style.my_property}`}>HQM3947356</p>
                  </div>
                </div>
                <div className={style.detail_content}>
                  <div className={style.chechOut}>
                    <h4 className={` ${style.check_out} ${style.my_property} ${style.bold}`}>Check Out:</h4>
                    <p className={`${style.checkin_date} ${style.my_property}`}>10/11/2019</p>
                  </div>
                  <div className={style.payment}>
                    <h4 className={` ${style.payment_mode} ${style.my_property} ${style.bold}`}>Payment Mode:</h4>
                    <p className={`${style.checkin_date} ${style.my_property}`}>Credit Card</p>
                  </div>
                </div>
                <div className={style.detail_content}>
                  <h4 className={` ${style.room} ${style.my_property} ${style.bold}`}>Rooms: </h4>
                  <p className={` ${style.checkin_date} ${style.my_property}`}>1</p>
                </div>
              </div>
            </div>
            {/* form section */}

            <div className={style.form_section_h4}>
              <div className={style.h4_form_section}>
                <div className={style.grey_bg}>
                  <Titleprops desc='Description' rate='Rate' amount='Amount' />
                </div>
                <Table2 desc='Room Charges' rate='$250 X 2 Nights X 1 Room' amount='$500' />
                <Table2 desc='Other Charges' rate='0.00' amount='0.0' />
                <Table2 desc='Promotional Code' rate='SUMMERFUN-20% ONE TIME DISCOUNT' amount='-$100' />
                <div className={style.grey_bg}>
                  <TableInput desc=' ' rate='Sub Total:' amount='$40' />
                </div>
                <div className={style.grey_bg}>
                  <TableInput desc=' ' rate='Tax' amount='$40.00' />
                </div>
                <div className={style.grey_bg}>
                  <TableInput desc=' ' rate='Total' amount='$404' />
                </div>
              </div>

              <div className={style.note_content}>
                <p className={`${style.note} ${style.my_property}`}>
                  <span className={`${style.note_bold} ${style.my_property}`}>Please Note:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit fugiat non adipisci ea
                  cupiditate dolor sit amet consectetur adipisicing elit. Excepturi fugit fugiat non adipisci ea
                  cupiditate.
                </p>
              </div>
              <div className={style.ai_footer}>
                <h1 className={`${style.ai_footer_title} ${style.headings}`}>Quickai Inc.</h1>
                <br />
                <p className={`${style.ai_footer_para} ${style.my_property}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Ipsa, aspernatur sapiente culpa quibusdam sint ipsum?
                </p>
              </div>
              <div className={style.footer_note_section}>
                <p className={`${style.footer_note} ${style.my_property}`}>
                  Note: This is the computer generated recipit does not reqiure any physical signature
                </p>
                <div className={style.print_section}>
                  <PrintIcon className={style.dn_icon1} />
                  <input className={`${style.print} ${style.my_property} `} value='Print' onChange={handleChange} />
                  <DownloadIcon className={style.dn_icon} />
                  <input className={`${style.print} ${style.my_property} `} value='Download'onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Main4
