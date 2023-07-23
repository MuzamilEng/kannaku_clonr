import style from './reviewform.module.css'

const ReviewForm = () => {
  return (
    <div className={style.Review_form}>
      <div className={style.Review_container}>
        <div className={style.submit_review}>
          <div className={style.submit_review_content}>
            <h1 className={` ${style.submit_review_title} ${style.headings}`}>Write a review</h1>
          </div>
          <div className={style.submit_review_content}>
            <label className={style.review_name} htmlFor='name'>
              <h3 className={style.headings}>Your Name</h3>
            </label>
            <br />
            <input type='text' className={style.review_placeholder} placeholder='enter your name' />
          </div>
          <div className={style.submit_review_content}>
            <label htmlFor='review' className={style.review_label}>
              <h3 className={style.my_property}>Your Review</h3>
            </label>
            <br />
            <textarea
              className={` ${style.text_area} ${style.my_property}`}
              name='review'
              id='review'
              cols='70'
              rows='10'
              placeholder='enter your review'
            ></textarea>
          </div>
          <div className={style.submit_review_content}>
            <label className={` ${style.rating_label} ${style.my_property}`} htmlFor='rating'>
              Rating
            </label>
            <div className={style.input_box}>
              <div className={style.checkbox_content}>
                <label htmlFor='radio' className={` ${style.radio_label} ${style.my_property}`}>
                  Poor
                </label>
                <input type='radio' name='Poor' id='poor' className={` ${style.radios} ${style.my_property}`} />
              </div>
              <div className={style.checkbox_content}>
                <label htmlFor='radio' className={`${style.radio_label} ${style.my_property}`}>
                  Bad
                </label>
                <input type='radio' name='Poor' id='poor' className={`${style.radios} ${style.my_property}`} />
              </div>
              <div className={style.checkbox_content}>
                <label htmlFor='radio' className={` ${style.radio_label} ${style.my_property}`}>
                  Good
                </label>
                <input type='radio' name='Poor' id='poor' className={`${style.radios} ${style.my_property}`} />
              </div>
              <div className={style.checkbox_content}>
                <label htmlFor='radio' className={` ${style.radio_label} ${style.my_property}`}>
                  Fair
                </label>
                <input type='radio' name='Poor' id='poor' className={` ${style.radios} ${style.my_property}`} />
              </div>
              <div className={style.checkbox_content}>
                <label htmlFor='radio' className={` ${style.radio_label} ${style.my_property}`}>
                  Excellent
                </label>
                <input type='radio' name='Poor' id='poor' className={` ${style.radios} ${style.my_property}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.review_submit_button}>
          <button className={` ${style.review_submit} ${style.my_property}`}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
