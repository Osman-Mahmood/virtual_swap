import React, { useEffect } from 'react'
import './Farms.css'
import ArrowIcon from '../../../Assets/Images/arrow.png'
import QuestionMark from '../../../Assets/Images/question.png'
import conn_icon from '../../../Assets/Images/connection_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { connectionAction } from '../../../Redux/connection/actions'

function Farms() {
  const dispatch = useDispatch()
  let acc = useSelector((state) => state.connect?.connection)
  console.log('acc', acc)
  const connectWallet = () => {
    dispatch(connectionAction())
  }
  useEffect(() => {}, [acc])

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <div className="row d-flex justify-content-between farms_bg">
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <div className="">
                <div class="d-flex flex-column bd-highlight">
                  <div class=" tfarms"> Farms</div>
                  <div class=" tstake">Stake LP tokens to earn.</div>
                  <div className="mt-3">
                    <button className="d-flex justify-content-start align-items-center btn_com_bg">
                      <div className="btn_com_icon_bg p-2 text-white">
                        <img
                          src={ArrowIcon}
                          className="img-fluid ArrowIcon "
                          width={'20px'}
                          alt=""
                        />
                      </div>
                      <div className=" btn_com ms-2">Community Action</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-12 col-lg-9 col-xl-7 mt-5">
                  <div className="frms-bg">
                    <div className="row d-flex justify-content-end margin-swap">
                      <div className="col-3 ">
                        <div className="d-flex justify-content-between">
                          <div className="ellispe-two">
                            <div className=" d-flex justify-content-center signal-icon">
                              <img
                                src={QuestionMark}
                                className="img-fluid"
                                width={'13px'}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2 ms-3 ">
                      <div className="tYield">Yield Booster</div>
                      <div className="tconnectWallet">
                        Connect wallet to view booster
                      </div>
                      <div className="tanactive">
                        An active fixed-term CAKE staking position is required
                        for activating farm yield boosters
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 btn-margin">
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="d-flex justify-content-start align-items-center btn_Connect_Wallet_bg"
                            onClick={connectWallet}
                          >
                            <div className="btn_Connect_Wallet_icon_bg p-3 text-white">
                              <img
                                src={conn_icon}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className=" btn_conn ">
                              {acc === 'No Wallet'
                                ? 'Connect Wallet'
                                : acc === 'Connect Wallet'
                                ? 'Connect Wallet'
                                : acc === 'Wrong Network'
                                ? acc
                                : acc.substring(0, 3) +
                                  '...' +
                                  acc.substring(acc.length - 3)}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Farms
