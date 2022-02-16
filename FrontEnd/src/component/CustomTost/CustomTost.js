import { useEffect, useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";


const CustomTost = (props) => {
  const [show, setShow] = useState(false);
 
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };
 
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
 
  setTimeout(()=>{
    setShow(false);
    props.onClose(false);
  },props.timeout);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <div className={popupStyles.titletext}>
        <h2>{props.title}</h2>
        </div>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};
 
CustomTost.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomTost;