import style from "./para.module.css"

const Para = () => {
  return (
    <div className={style.para_Container}>
      <div className={style.para_Body}>
        <div className={style.para1}>
          <p className={` ${style.para1_body} ${style.my_property}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            at culpa doloribus , aut assumenda dignissimos optio tempora hic
            impedit expedita in perferendis consequuntur suscipit? Optio
            quisquam, beatae esse accusamus fugiat voluptatem voluptatum autem
            natus enim error odio quos dolorum quae recusandae voluptates
          </p>
        </div>
        <div className={style.Policies}>
          <div className={style.Policies_section}>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </div>
          <div className={style.Policies_section}>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={` ${style.lists_content} ${style.my_property}`}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Para
