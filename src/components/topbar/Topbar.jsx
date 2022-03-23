import "./topbar.scss";
import { FaEnvelope } from "react-icons/fa";


function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span>ipek</span>{" "}
          </a>
          <div className="itemContainer">
            <FaEnvelope className="icon" />
            <span>isoltanov605@gmail.com</span>
          </div>
        </div>
        <div className="right">
 
        </div>
      </div>
    </div>
  );
}

export default Topbar;
