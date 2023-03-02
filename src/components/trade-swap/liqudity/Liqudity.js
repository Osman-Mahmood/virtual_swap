import React from "react";
import "./Liqudity.css";
// import coin from "../../Assets/Images/bnb-logo.png";
import SettingICon from "../../../Assets/Images/MaskSetting.png";
import Ticon from "../../../Assets/Images/TimeIcon.png";
// import ExchangeIcon from "../../Assets/Images/Exchange.png";
// import CopyIcon from "../../Assets/Images/Copy.png";
// import connection_icon from "../../../Assets/Images/connection_icon.png";
import Plus from "../../../Assets/Images/plusIcon.png";
import { HashLink } from "react-router-hash-link";
import TradeNavbar from "../Navbar/TradeNavbar";

function Liqudity() {
 
  return (
    <div className="container">
    <TradeNavbar/>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-xl-4 col-lg-4 col-md-6  mt-5">
          <div className="Liquidity-bg">
            <div className="row d-flex justify-content-end margin-swap">
              <div className="col-xl-4 col-lg-4 col-md-4 col-4 ">
                <div className="d-flex justify-content-between">
                  <div className="ellispe-two">
                    <div className=" d-flex justify-content-center signal-icon">
                      <img
                        src={SettingICon}
                        className="img-fluid"
                        alt=""
                        width={"18px"}
                      />
                    </div>
                  </div>
                  <div className="ellispe-two">
                    <div className=" d-flex justify-content-center signal-icon">
                      <img
                        src={Ticon}
                        className="img-fluid"
                        width={"18px"}
                        alt=""
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="text-center tYour">Your Liquidity</div>
              <div className="text-center tRemove">
                Remove liquidity to receive tokens back
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-md-10 d-flex justify-content-center">
                <div className="text_connect_to">
                  Connect to a wallet to view your liquidity
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-md-10 col-10 d-flex justify-content-center">
                <HashLink to="/liqudity_Swap" className="link_Add">
                Add Liquidity
                </HashLink>
              </div>
            </div>

            <div className="row d-flex justify-content-center mt-3 ">
              {/* <div className="col-lg-3 col-sm-3 responsive-liquidity-button">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="d-flex justify-content-start align-items-center btn_add_bg">
                    <div className="btn_Add_icon_bg p-3 text-white">
                      <img src={Plus} className="img-fluid" alt="" />
                    </div>
                    <div className=" btn_conn ">
                      <HashLink to="/liqudity_Swap" className="link_Add">
                        Add Liquidity
                      </HashLink>
                    </div>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liqudity;
