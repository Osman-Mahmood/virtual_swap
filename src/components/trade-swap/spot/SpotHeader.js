import React from "react";
import "./Spot.css";
import { MdDetails } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { Link } from "react-router-dom";

function SpotHeader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 spot_border">
          <div className="row d-flex justify-content-between align-items-center m-3">
            <div className="col-lg-2  col-md-3 btc_border">
              <div className="text_Btc">BTC/USDT</div>
              <div className="text_bitcon ">
                <MdDetails /> Bitcoin Detail
              </div>
            </div>
            <div className="col-lg-7 col-md-3">
              <div className="d-flex justify-content-between align-items-center spot_value_mbolie">
                <div>
                  <h6 className="spot_value text-success">20,825.22</h6>
                  <p className="text_spotPrice m-0 p-0">$20,825.22</p>
                </div>
                <div className="spot_mobile">
                  <h6 className="text_change">24h Change</h6>
                  <p className="text_price m-0 p-0">$20,825.22</p>
                </div>
                <div className="spot_mobile">
                  <h6 className="text_change">24h High</h6>
                  <p className="text_price m-0 p-0">$20,825.22</p>
                </div>
                <div className="spot_mobile">
                  <h6 className="text_change">24h Low</h6>
                  <p className="text_price m-0 p-0">$20,825.22</p>
                </div>
                <div className="spot_mobile">
                  <h6 className="text_change">24h Volume(BTC)</h6>
                  <p className="text_price m-0 p-0">$20,825.22</p>
                </div>
                <div className="spot_mobile">
                  <h6 className="text_change">24h Volume(USDT)</h6>
                  <p className="text_price m-0 p-0">$20,825.22</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 border_spot_tutorial">
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-white">
                  <Link className="text_spot_tutorial">
                    <MdSlowMotionVideo /> &nbsp; Spot Tutorial
                  </Link>
                </div>
                <div className="text-white">
                  <Link className="text_spot_tutorial">
                    <MdOutlinePermDeviceInformation />
                    &nbsp; Spot Guidance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotHeader;
