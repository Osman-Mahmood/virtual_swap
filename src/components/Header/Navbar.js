import React from "react";
import "./Navbar.css";
import virtual_swap_logo from "../../Assets/Images/VirtualSwap-01.png";
import lines from "../../Assets/Images/Group1.png";
import profile_icon from "../../Assets/Images/uu7.png";
import language_icon from "../../Assets/Images/Maskgroup.png";
import setting_icon from "../../Assets/Images/SettingIcon.png";
import BnbIcon from "../../Assets/Images/BnbIcon.png";
import connection_icon from "../../Assets/Images/connection_icon.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import { useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  let {userWallet} = useSelector((state) => state.connect);
  console.log("userWallet", userWallet);
  const [iscolor, setIsColor] = useState("Farms");
  const { pathname } = useLocation();
  const changePath = () => {
    if (pathname) {
      console.log("pathname", pathname);
      if (pathname == "/Trade_Swap") {
        setIsColor("Trade");
      } else if (pathname == "/") {
        setIsColor("");
      } else if (pathname == "/trade_limit") {
        setIsColor("Limit");
      } else if (pathname == "/trade_liqudity") {
        setIsColor("Liqudity");
      } else if (pathname == "/farms") {
        setIsColor("Earn");
      } else if (pathname == "/pool") {
        setIsColor("Pool");
      } else if (pathname == "/Win_latest") {
        setIsColor("Win");
      } else if (pathname == "/Win_prediction") {
        setIsColor("Prediction");
      } else if (pathname == "/Win_lottery") {
        setIsColor("Virtual Bond");
      } else if (pathname == "/Win_pottery") {
        setIsColor("Pottery");
      } else if (pathname == "/Nft_overview") {
        setIsColor("Nft");
      } else if (pathname == "/Nft_overview") {
        setIsColor("OverView");
      } else if (pathname == "/Nft_collection") {
        setIsColor("Collection");
      } else if (pathname == "/Nft_activity") {
        setIsColor("Activity");
      } else if (pathname == "/Virtual_Event") {
        setIsColor("Virtual Event");
      } else if (pathname == "/legend_user") {
        setIsColor("Legend User");
      } else if (pathname == "/jackpot") {
        setIsColor("Jackpot");
      } else if (pathname == "") {
        setIsColor("Leader Board");
      } else if (pathname == "/info_swap") {
        setIsColor("Info");
      } else if (pathname == "/ifo_latest") {
        setIsColor("Ifo");
      } else if (pathname == "") {
        setIsColor("Voting");
      } else if (pathname == "/referral") {
        setIsColor("Referral");
      } else if (pathname == "/Trade_league") {
        setIsColor("Trade League");
      } else if (pathname == "/tokenomic") {
        setIsColor("Tokenomics");
      } else if (pathname == "/launchPad") {
        setIsColor("Launch Pad");
      } else if (pathname == "/virtualGallery") {
        setIsColor("Virtual Gallery");
      } else if (pathname == "/spot") {
        setIsColor("Spot");
      }
    }
  };

  const connectWallet = () => {
    dispatch(connectionAction());
  };

  useEffect(() => {
    changePath();
  },[pathname]);


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src={virtual_swap_logo}
                  className="img-fluid"
                  alt=""
                  width={"170px"}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse text-font"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link
                        className={
                          iscolor == "Trade" ||
                          iscolor == "Limit" ||
                          iscolor == "Liqudity" ||
                          iscolor == "Spot"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Trade"
                        onClick={() => setIsColor("Trade")}
                        to="/Trade_Swap"
                      >
                        Trade
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "Trade" ? "nav-link-active" : "nav-link"
                        }
                        id="Trade"
                        onClick={() => setIsColor("Trade")}
                        to="/Trade_Swap"
                      >
                        Swap
                      </Link>
                      <Link
                        className={
                          iscolor == "Limit" ? "nav-link-active" : "nav-link"
                        }
                        id="Limit"
                        onClick={() => setIsColor("Limit")}
                        to="/trade_limit"
                      >
                        Limit
                      </Link>
                      <Link
                        className={
                          iscolor == "Spot" ? "nav-link-active" : "nav-link"
                        }
                        id="Spot"
                        onClick={() => setIsColor("Spot")}
                        to="/spot"
                      >
                        Spot
                      </Link>
                      <Link
                        className={
                          iscolor == "Liqudity" ? "nav-link-active" : "nav-link"
                        }
                        id="Liqudity"
                        onClick={() => setIsColor("Liqudity")}
                        to="/trade_liqudity"
                      >
                        Liqudity
                      </Link>
                    </div>
                  </div>

                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link
                        className={
                          iscolor == "Earn" ||
                          iscolor == "Farms" ||
                          iscolor == "Pool"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Earn"
                        onClick={() => setIsColor("Earn")}
                        to="/farms"
                      >
                        Earn
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "Farms" ? "nav-link-active" : "nav-link"
                        }
                        id="Farms"
                        onClick={() => setIsColor("Farms")}
                        to="/farms"
                      >
                        Farms
                      </Link>
                      <Link
                        className={
                          iscolor == "Pool" ? "nav-link-active" : "nav-link"
                        }
                        id="Pool"
                        onClick={() => setIsColor("Pool")}
                        to="/pool"
                      >
                        Pool
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link
                        className={
                          iscolor == "Win" ||
                          iscolor == "Trading Competition" ||
                          iscolor == "Prediction" ||
                          iscolor == "Virtual Bond" ||
                          iscolor == "Pottery"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Win"
                        onClick={() => setIsColor("Win")}
                        to="/Win_latest"
                      >
                        Win
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "Trading Competition"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Trading Competition"
                        onClick={() => setIsColor("Trading Competition")}
                        to="/Win_latest"
                      >
                        Trading Competition
                      </Link>
                      <Link
                        className={
                          iscolor == "Prediction"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Prediction"
                        onClick={() => setIsColor("Prediction")}
                        to="/Win_prediction"
                      >
                        Prediction
                      </Link>
                      <Link
                        className={
                          iscolor == "Virtual Bond"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Virtual Bond"
                        onClick={() => setIsColor("Virtual Bond")}
                        to="/Win_lottery"
                      >
                        Virtual Bond
                      </Link>
                      <Link
                        className={
                          iscolor == "Pottery" ? "nav-link-active" : "nav-link"
                        }
                        id="Pottery"
                        onClick={() => setIsColor("Pottery")}
                        to="/Win_pottery"
                      >
                        Pottery
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link
                        className={
                          iscolor == "Nft" ||
                          iscolor == "OveView" ||
                          iscolor == "Collection" ||
                          iscolor == "Activity"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Nft"
                        onClick={() => setIsColor("Nft")}
                        to="/Nft_overview"
                      >
                        Nft
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "OveView" ? "nav-link-active" : "nav-link"
                        }
                        id="OverView"
                        onClick={() => setIsColor("OverView")}
                        to="/Nft_overview"
                      >
                        OverView
                      </Link>
                      <Link
                        className={
                          iscolor == "Collection"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Collection"
                        onClick={() => setIsColor("Collection")}
                        to="/Nft_collection"
                      >
                        Collection
                      </Link>
                      <Link
                        className={
                          iscolor == "Activity" ? "nav-link-active" : "nav-link"
                        }
                        id="Activity"
                        onClick={() => setIsColor("Activity")}
                        to="/Nft_activity"
                      >
                        Activity
                      </Link>
                    </div>
                  </div>

                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link
                        className={
                          iscolor == "Virtual Event" ||
                          iscolor == "Legend User" ||
                          iscolor == "Jackpot" ||
                          iscolor == "Leader Board" ||
                          iscolor == "Tokenomics" ||
                          iscolor == "Virtual Gallery"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="More"
                        onClick={() => setIsColor("More")}
                        to="/Virtual_Event"
                      >
                        More
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "Virtual Event"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Virtual Event"
                        onClick={() => setIsColor("Virtual Event")}
                        to="/Virtual_Event"
                      >
                        Virtual Event
                      </Link>
                      <Link
                        className={
                          iscolor == "Legend User"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Legend User"
                        onClick={() => setIsColor("Legend User")}
                        to="/legend_user"
                      >
                        Legend User
                      </Link>
                      <Link
                        className={
                          iscolor == "Jackpot" ? "nav-link-active" : "nav-link"
                        }
                        id="Jackpot"
                        onClick={() => setIsColor("Jackpot")}
                        to="/jackpot"
                      >
                        Jackpot
                      </Link>
                      <Link
                        className={
                          iscolor == "Tokenomics"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Tokenomics"
                        onClick={() => setIsColor("Tokenomics")}
                        to="/tokenomic"
                      >
                        Tokenomics
                      </Link>
                      <Link
                        className={
                          iscolor == "Leader Board"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Leader Board"
                        onClick={() => setIsColor("Leader Board")}
                        to="/leadBoard"
                      >
                        Lead Board
                      </Link>
                      <Link
                        className={
                          iscolor == "Virtual Gallery"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Virtual Gallery"
                        onClick={() => setIsColor("Virtual Gallery")}
                        to="/virtualGallery"
                      >
                        Virtual Gallery
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div tabIndex={0}>
                      <Link className="nav-link">
                        <img
                          src={lines}
                          width={"20px"}
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="dropdown-content">
                      <Link
                        className={
                          iscolor == "Info" ||
                          iscolor == "Swap" ||
                          iscolor == " Stable Swap"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Info"
                        onClick={() => setIsColor("Info")}
                        to="/info_swap"
                      >
                        Info
                      </Link>
                      <Link
                        className={
                          iscolor == "Ifo" ||
                          iscolor == "Latest" ||
                          iscolor == "Finished"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Ifo"
                        onClick={() => setIsColor("Ifo")}
                        to="/ifo_latest"
                      >
                        IFO
                      </Link>
                      <Link
                        className={
                          iscolor == "Voting" ? "nav-link-active" : "nav-link"
                        }
                        id="Voting"
                        onClick={() => setIsColor("Voting")}
                        to="/voting"
                      >
                        Voting
                      </Link>
                      <Link
                        className={
                          iscolor == "Referral" ? "nav-link-active" : "nav-link"
                        }
                        id="Referral"
                        onClick={() => setIsColor("Referral")}
                        to="/referral"
                      >
                        Referral
                      </Link>
                      <Link
                        className={
                          iscolor == "Trade League"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Trade League"
                        onClick={() => setIsColor("Trade League")}
                        to="/Trade_league"
                      >
                        Trade League
                      </Link>
                      <Link
                        className={
                          iscolor == "Launch Pad"
                            ? "nav-link-active"
                            : "nav-link"
                        }
                        id="Launch Pad"
                        onClick={() => setIsColor("Launch Pad")}
                        to="/launchPad"
                      >
                        Launch Pad
                      </Link>
                    </div>
                  </div>
                </ul>
                <div className="d-flex nav_mbl-responsive">
                  {/* ************************************************************************************************** */}
                  <div className="mt-2 nav-margin-responsive ">
                    <div className=" d-flex  align-items-center text-center">
                      <img
                        src={profile_icon}
                        className="img-fluid circle"
                        alt=""
                        width={"22px"}
                      />
                      <b className=" nav_amount ms-2">$3.922</b>
                    </div>
                  </div>
                  <div className="d-flex align-items-center nav_amount ms-4 gap-3 nav-margin-responsive mobile_nav ">
                    <img
                      src={language_icon}
                      className="img-fluid"
                      width={"26px"}
                      alt=""
                      height={"26px"}
                    />
                    <img
                      src={setting_icon}
                      className="img-fluid"
                      alt=""
                      width={"26px"}
                      height={"26px"}
                    />
                  </div>
                  {/* ************************************************************************************************** */}

                  {/* ************************************************************************************************** */}
                  {/* ************************************************************************************************** */}
                  {/* <div className=" pt-2 ms-4">
            <div className="btn_bg d-flex flex-wrap text-white">
              <div className=" d-flex justify-content-center align-items-center ms-0 pe-2 btn_icon_bg">
              <img src={BnbIcon} className="img-fluid ms-1" alt="" width={"25px"} />
               
              </div>
              <div className=" d-flex justify-content-center align-items-center btn_bnb_smart_chain">
                <span>BNB Smart Chain</span>
              </div>
            </div>
          </div> */}
                  <div className="d-flex  align-items-center  ms-4 mbl_btn">
                    <button className=" d-flex justify-content-start align-items-center btn_bg">
                      <div className="btn_icon_bg p-1 ">
                        <img src={BnbIcon} className="img-fluid " alt="" />
                      </div>
                      <div className=" btn_bnb_smart_chain">
                        BNB Smart Chain
                      </div>
                    </button>
                  </div>
                  {/* ************************************************************************************************** */}
                  {/* <div className=" pt-2 ms-4">
            <div className="btn_connect_bg d-flex flex-wrap text-white">
              <div className=" d-flex justify-content-center align-items-center ms-0 pe-2 btn_connect_icon_bg">
              <img src={connection_icon} className="img-fluid ms-1" alt="" width={"25px"} />
              </div>
              <div className=" d-flex justify-content-center align-items-center btn_connection_wallet">
                <span>Connect Wallet</span>
              </div>
            </div>
          </div> */}
                  <div className="d-flex  align-items-center mbl_btn ms-4">
                    <button
                      className=" d-flex justify-content-start align-items-center btn_connect_bg"
                      onClick={connectWallet}
                    >
                      <div className="btn_connect_icon_bg p-2">
                        <img
                          src={connection_icon}
                          className="img-fluid "
                          alt=""
                        />
                      </div>
                      <div className=" btn_connection_wallet">
                        {userWallet === "No Wallet"
                          ? "Connect Wallet"
                          : userWallet === "Connect Wallet"
                          ? "Connect Wallet"
                          : userWallet === "Wrong Network"
                          ? userWallet
                          : userWallet.substring(0, 3) +
                            "..." +
                            userWallet.substring(userWallet.length - 3)}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
