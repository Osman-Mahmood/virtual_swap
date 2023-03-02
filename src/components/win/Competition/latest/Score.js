import React, { useEffect } from "react";
// import "./Latest.css";
import connectICon from "../../../../Assets/Images/connection_icon.png";
import facePicture from "../../../../Assets/Images/Win/uu16.png";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../../../Redux/connection/actions";

function Score() {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  console.log("acc", acc);
  const connectWallet = () => {
    dispatch(connectionAction());
  };
  useEffect(() => {}, [acc]);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6 ">
          <div className="Latest-box">
            <div className="row d-flex justify-content-center">
              <div className="title-box">Your Score</div>
            </div>
            <div className="row">
              <div className="col-md-8 ">
                <div className="t-check ms-3">check your rank</div>
                <div className="t-connect-view ms-3 ">
                  Connect wallet to view
                </div>
                <div className="text_amount ms-3 mt-2">
                  <button
                    className=" d-flex justify-content-start align-items-center btn_Fgird_bg"
                    onClick={connectWallet}
                  >
                    <div className="btn_fgird_icon_bg p-2">
                      <img
                        src={connectICon}
                        className="img-fluid"
                        alt=""
                        width={"30px"}
                      />
                    </div>
                    <div className="btn_Fgird ps-3">
                      {acc === "No Wallet"
                        ? "Connect Wallet"
                        : acc === "Connect Wallet"
                        ? "Connect Wallet"
                        : acc === "Wrong Network"
                        ? acc
                        : acc.substring(0, 3) +
                          "..." +
                          acc.substring(acc.length - 3)}
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <img
                    src={facePicture}
                    className="img-fluid facePicture"
                    alt=""
                    width={"180px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
