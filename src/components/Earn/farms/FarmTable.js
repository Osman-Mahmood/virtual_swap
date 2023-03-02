import React from "react";
import coinIcon from "../../../Assets/Images/Group5.png";
import calculatorIcon from "../../../Assets/Images/calculator.png";
import questionIcon from "../../../Assets/Images/Group6.png";
// import ArrowDownIcon from "../../../Assets/Images/ArrowDown.png";
import Accordion from "react-bootstrap/Accordion";
import { CgArrowTopRightR } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
function FarmTable() {
  const data = [
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
      eventKey: "0",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
      eventKey: "1",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
      eventKey: "2",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
      eventKey: "3",
    },
  ];
  return (
    <div className="container">
      {" "}
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <div className="row">
            <Accordion flush className="m-2">
              {data.map((data) => {
                return (
                  <>
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>
                        <div className="col-md-11 mt-3 mb-3">
                          <div className=" d-flex justify-content-between align-items-center">
                            <div>
                              <img
                                src={coinIcon}
                                className="img-fluid"
                                alt=""
                                width={"40px"}
                              />
                              <span> VS-BNB</span>
                            </div>
                            <div>
                              <button className="btn-core">Core</button>
                              <button className=" ms-2 btn-boosted">
                                Boosted
                              </button>
                            </div>
                            <div>
                              <div className="text-accordion">Earned</div>
                              <div>{data.earn}</div>
                            </div>
                            <div>
                              <div className="text-accordion">APR</div>
                              <img
                                src={calculatorIcon}
                                className="img-fluid"
                                alt=""
                                width={"30px"}
                              />
                              &nbsp;&nbsp;
                              <del> {data.apr}</del>
                              <span className="tdiscount">
                                &nbsp; {data.discount}
                              </span>
                            </div>
                            <div>
                              <div className="text-accordion">Liquidity</div>
                              <div>
                                {data.liquidity}&nbsp;
                                <img
                                  src={questionIcon}
                                  className="img-fluid"
                                  alt=""
                                  width={"20px"}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="text-accordion">Multiplier</div>
                              <div>
                                {data.multiplier}&nbsp;
                                <img
                                  src={questionIcon}
                                  className="img-fluid"
                                  alt=""
                                  width={"15px"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-4 ">
                            <div className="row d-flex align-items-center">
                              <div className="p-2 text_virtualEarnedUp">
                                Get Virtual-BNB LP <CgArrowTopRightR />
                              </div>
                              <div className="p-2 text_virtualEarnedUp">
                                See Pair Info <CgArrowTopRightR />
                              </div>
                              <div className="p-2 text_virtualEarnedUp">
                                View Contract <FaFileContract />
                              </div>
                            </div>
                          </div>
                          <div className="col-8 ">
                            <div className="row d-flex justify-content-between">
                              <div className="col-5 farming_box  mt-3">
                                <div className="row m-2 mt-3 ">
                                  <div className=" d-flex justify-content-between align-items-center">
                                    <div className="">
                                      <h4 className="text_virtualEarned">
                                        Virtual Earned
                                      </h4>
                                      <p className="text_virtualEarnedUp">
                                        0.0000
                                      </p>
                                    </div>
                                    <div>
                                      <button
                                        className="btn btn_Farm"
                                        type="button"
                                      >
                                        Harvest
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-5 farming_box mt-3">
                                <div className="m-2">
                                  <h4 className="text_virtualEarned">
                                    YIELD BOOSTER
                                  </h4>
                                  <p className="text_virtualEarnedUp">
                                    Up to 2x &nbsp; &nbsp;
                                    <span>
                                      <img
                                        src={questionIcon}
                                        className="img-fluid"
                                        alt=""
                                        width={"20px"}
                                      />
                                    </span>
                                  </p>
                                  <p className="text_virtualEarned m-0 p-0">
                                    Connect wallet to activate yield booster
                                  </p>
                                </div>
                              </div>
                              <div className="col-12 farming_box mt-3 mb-3">
                                <h5 className="m-2">Start Farming</h5>
                                <div className="d-grid gap-2 mb-3">
                                  <button
                                    className="btn btn_Farm"
                                    type="button"
                                  >
                                    Connect Wallet
                                  </button>
                                </div>

                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                );
              })}
            </Accordion>
          </div>
          {/* <div className="table">
            <table className="table" style={{ width: "100%" }}>
              {data.map((data) => {
                return (
                  <>
                    <tr className="table-heading">
                      <th></th>
                      <th></th>
                      <th>Earn</th>
                      <th>APR</th>
                      <th>Liquidity</th>
                      <th>Multiplier</th>
                      <th></th>
                    </tr>

                    <tr className="table-row">
                      <td className="text-center">
                        <img
                          src={coinIcon}
                          className="img-fluid"
                          alt=""
                          width={"40px"}
                        />
                        <span> VS-BNB</span>
                      </td>
                      <td className="">
                        <button className="btn-core">Core</button>
                        <button className=" ms-2 btn-boosted">Boosted</button>
                      </td>
                      <td>{data.earn}</td>
                      <td>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          alt=""
                          width={"40px"}
                        />
                        &nbsp;&nbsp;
                        <del> {data.apr}</del>
                        <span className="tdiscount">
                          &nbsp; {data.discount}
                        </span>
                      </td>
                      <td>
                        {data.liquidity}&nbsp;
                        <img
                          src={questionIcon}
                          className="img-fluid"
                          alt=""
                          width={"30px"}
                        />
                      </td>
                      <td>
                        {data.multiplier}&nbsp;
                        <img
                          src={questionIcon}
                          className="img-fluid"
                          alt=""
                          width={"30px"}
                        />
                      </td>
                      <td>
                        <img
                          src={ArrowDownIcon}
                          className="img-fluid"
                          alt=""
                          width={"30px"}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FarmTable;
