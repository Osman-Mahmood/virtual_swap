import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import Chart from "react-google-charts";
import { HiOutlineInformationCircle } from "react-icons/hi";
import PaginatedItems from "./paginate";
import { useState } from "react";
import ReactRanger from "react-ranger";
import { useRanger } from "react-ranger";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoTrendingUpSharp } from "react-icons/io5";

function SpotChart() {
  const [values, setValues] = useState([10]);
  const { getTrackProps, handles } = useRanger({
    values,
    onChange: setValues,
    min: 0,
    max: 100,
    stepSize: 5,
  });
  const market = [
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "green",
      backgroundColor: "#18342E",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "red",
      backgroundColor: "#372128",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "red",
      backgroundColor: "#372128",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "green",
      backgroundColor: "#18342E",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "red",
      backgroundColor: "#372128",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "red",
      backgroundColor: "#372128",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "green",
      backgroundColor: "#18342E",
    },
    {
      pair: "Usd / BNB",
      time: "12:00",
      percent: "12.4%",
      volume: "high 23mint",
      color: "green",
      backgroundColor: "#18342E",
    },
  ];
  const data = [
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "red",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "red",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "green",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "green",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "red",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "red",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "red",
    },
    {
      price: "20758.98",
      amount: "0.16460",
      total: "20758.98",
      color: "green",
    },
  ];
  const pair = [
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
      color: "green",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
      color: "red",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
      color: "green",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
      color: "red",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
    },
    {
      pair: "UsdT / Bnd",
      price: "0.2312",
      volume: "1.9829",
      color: "red",
    },
  ];

  const graph = [
    [
      {
        type: "string",
        id: "Date",
      },
      {
        type: "number",
        label: "Something",
      },
      {
        type: "number",
        label: "Something",
      },
      {
        type: "number",
        label: "Something",
      },
      {
        type: "number",
        label: "Something",
      },
    ],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Fri", 68, 66, 22, 15],
  ];
  var options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
      baselineColor: "white",
    },

    hAxis: {
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
      },
      slantedText: false,
      minTextSpacing: 1,
    },
    vAxis: {
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
      },
      slantedText: false,
      minTextSpacing: 1,
    },

    chartArea: {
      backgroundColor: {
        fill: "#010017",
      },
    },

    backgroundColor: {
      fill: "#010017",
    },
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-3 col-md-12 spot_border">
              <div className="row d-flex justify-content-between mt-2 mb-2">
                <div className="col-md-7  d-flex justify-content-between">
                  <button className="btn_order">Order</button>
                  <button className="btn_order">Buy</button>
                  <button className="btn_order"> Sell</button>
                </div>
                <div className="col-md-3 d-flex justify-content-between">
                  <div className="">
                    <a
                      className=" dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      0.1
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          0.01
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          0.1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          10
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          50
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          100
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div>
                    <button
                      className="text-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "none",
                      }}
                    >
                      {BsThreeDotsVertical}
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="row">
                {/*  */}
                <div className="table_spot" id="style-3">
                  <table className="table  table-borderless">
                    <tr className=" list-table">
                      <th className="">Price(USDT)</th>
                      <th className="">Amount(BTC)</th>
                      <th className="">Total</th>
                    </tr>
                    {data.map((data) => {
                      return (
                        <>
                          <tr className=" list-table">
                            <td className="m-0 p-0 text-danger">
                              {data.price}
                            </td>
                            <td className=" ">{data.amount}</td>
                            <td className="">{data.total}</td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="d-flex justify-content-between">
                  <h3 className="spot_value text-white">20758.98</h3>
                  <p className="spot_value text-white">more</p>
                </div>
              </div>
              <div className="row">
                <div
                  className="table_spot"
                  style={{ height: "400px" }}
                  id="style-3"
                >
                  <table className="table">
                    <tr className=" list-table ">
                      <th className="">Price(USDT)</th>
                      <th className="">Amount(BTC)</th>
                      <th className="">Total</th>
                    </tr>
                    {data.map((data) => {
                      return (
                        <>
                          <tr className=" list-table  mt-5">
                            <td className="m-0 p-0 text-success">
                              {data.price}
                            </td>
                            <td className=" ">{data.amount}</td>
                            <td className="">{data.total}</td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 spot_border">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-6 col-md-12">
                  <div className="" role="group" aria-label="First group">
                    <button type="button" className="btn btn-spot-time">
                      Time
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      1s
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      15m
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      1H
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      4H
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      1D
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      1W
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="" role="group" aria-label="First group">
                    <button type="button" className="btn btn-spot-time">
                      Origin
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      Trading View
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      Depth
                    </button>
                    <button type="button" className="btn btn-spot-time">
                      <MdOutlineMoreVert />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 mt-3">
                  <div className="App">
                    <Chart
                      chartType="CandlestickChart"
                      width="100%"
                      height="400px"
                      data={graph}
                      options={options}
                      className="chart-bg"
                    />
                  </div>
                </div>
              </div>
              <div className="row spot_border mt-3 d-flex justify-content-center">
                <div className="mt-3">
                  <h4 className="text_login m-3">
                    <b>Spot</b>
                  </h4>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="" role="group" aria-label="First group">
                      <button type="button" className="btn btn-spot-time">
                        Limit
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        Market
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        Stop-Limit
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        <HiOutlineInformationCircle />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-between mt-3">
                  <div className="col-lg-6 mol-md-12">
                    <div className="text_avlb">
                      <span style={{ color: "rgba(255, 255, 255, 0.404)" }}>
                        avbl - &nbsp;
                      </span>
                      USDT
                    </div>
                    <div className="" style={{ width: "100%" }}>
                      <div className="input-group mb-3 spot_input">
                        <input
                          type="text"
                          className="form-control form-control2 form-control form-control22"
                          placeholder="Price"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <span
                          className="input-group-text text-white"
                          id="basic-addon1"
                        >
                          USDT
                        </span>
                      </div>
                      <div className="input-group spot_input mb-3">
                        <input
                          type="text"
                          className="form-control form-control2"
                          placeholder="Amount"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span
                          className="input-group-text text-white"
                          id="basic-addon2"
                        >
                          BTC
                        </span>
                      </div>
                    </div>
                    <div
                      className="mt-3 mb-3"
                      {...getTrackProps({
                        style: {
                          height: "4px",
                          background: "#016694",
                          boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                          borderRadius: "2px",
                        },
                      })}
                    >
                      {handles.map(({ getHandleProps }) => (
                        <div
                          {...getHandleProps({
                            style: {
                              width: "20px",
                              height: "20px",
                              borderRadius: "100%",
                              background: "#01D4D4",
                              border: "solid 1px #160D27",
                            },
                          })}
                        />
                      ))}
                    </div>
                    <div class="d-grid mb-3">
                      <button class="btn btn_spotBuy" type="button">
                        <span className="">Buy BTC &nbsp;</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 mol-md-12">
                    <div className="text_avlb">
                      <span style={{ color: "rgba(255, 255, 255, 0.404)" }}>
                        avbl - &nbsp;
                      </span>
                      USDT
                    </div>
                    <div className="" style={{ width: "100%" }}>
                      <div className="input-group mb-3 spot_input">
                        <input
                          type="text"
                          className="form-control form-control2"
                          placeholder="Price"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <span
                          className="input-group-text text-white"
                          id="basic-addon1"
                        >
                          USDT
                        </span>
                      </div>
                      <div className="input-group spot_input mb-3">
                        <input
                          type="text"
                          className="form-control form-control2"
                          placeholder="Amount"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span
                          className="input-group-text text-white"
                          id="basic-addon2"
                        >
                          BTC
                        </span>
                      </div>
                    </div>
                    <div
                      className="mt-3 mb-3"
                      {...getTrackProps({
                        style: {
                          height: "4px",
                          background: "#016694",
                          boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                          borderRadius: "2px",
                        },
                      })}
                    >
                      {handles.map(({ getHandleProps }) => (
                        <div
                          {...getHandleProps({
                            style: {
                              width: "20px",
                              height: "20px",
                              borderRadius: "100%",
                              background: "#01D4D4",
                              border: "solid 1px #160D27",
                            },
                          })}
                        />
                      ))}
                    </div>
                    <div class="d-grid mb-3">
                      <button class="btn btn_spotSell" type="button">
                        <span className="">Sell BTC &nbsp;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 spot_border">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="row mt-3">
                    <div className="" style={{ width: "100%" }}>
                      <input type="search" id="form1" placeholder="Search..." />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="row mt-3">
                    <div className="d-flex justify-content-between" role="group" aria-label="First group">
                      <button type="button" className="btn btn-spot-time">
                        USDT
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        BTC
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        BUSD
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        USD
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        BNB
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        <MdOutlineMoreVert />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12"
                  style={{ height: "280px" }}
                >
                  {/* <div className="row mt-3">
                    <div
                      className="d-flex justify-content-between"
                      role="group"
                      aria-label="First group"
                    >
                      <button type="button" className="btn btn-spot-time">
                        Pair
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        Price
                      </button>
                      <button type="button" className="btn btn-spot-time">
                        Volume
                      </button>
                    </div>
                  </div> */}
                  <div className="row mt-3">
                    <div className="table_spot" id="style-3">
                      <table className="table">
                        <tr className="list-pair">
                          <th className=""> Pair</th>
                          <th className="">Price</th>
                          <th className="">Volume</th>
                          <th></th>
                        </tr>
                        {pair.map((pair) => {
                          return (
                            <>
                              <tr
                                className="list-pair"
                                style={{ color: pair.color }}
                              >
                                <td className="text-white ">{pair.pair}</td>
                                <td className="">{pair.price}</td>
                                <td className="text-white">{pair.volume}</td>
                              </tr>
                            </>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                </div>

                {/* <PaginatedItems itemsPerPage={5}></PaginatedItems> */}
              </div>
              <div className="col-md-12">
                <div className="row">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link nav-profile-tab"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Market Trade
                      </button>
                      <button
                        className="nav-link nav-profile-tab"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        My Trade
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div
                        className="table_spot"
                        id="style-3"
                        style={{ height: "200px" }}
                      >
                        <table className="table">
                          <tr className=" list-table   bg-dark">
                            <th className="">Price(USDT)</th>
                            <th className="">Amount(BTC)</th>
                            <th className="">Total</th>
                          </tr>
                          {data.map((data) => {
                            return (
                              <>
                                <tr
                                  className=" list-table "
                                  style={{ color: data.color }}
                                >
                                  <td className="m-0 p-0">{data.price}</td>
                                  <td className=" text-white">{data.amount}</td>
                                  <td className=" text-white">{data.total}</td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="row ">
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "200px" }}
                        >
                          <h4 className="text_login ">
                            <span className="" style={{ color: "#04EBEA" }}>
                              Connect Wallet &nbsp;
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div className="row mt-2 ">
                  <div>
                    <h3 className="text-MarketActivites">Market Activities</h3>
                  </div>
                  <div className="market_spot" id="style-3">
                    {market.map((data) => {
                      return (
                        <>
                          <div className="d-flex justify-content-between ">
                            <div>
                              <h6 className="text-marketPair">{data.pair}</h6>
                              <h3 className="text-marketPair">{data.time}</h3>
                            </div>
                            <div>
                              <h6
                                className="text-marketPair"
                                style={{ color: data.color }}
                              >
                                {data.percent}
                              </h6>
                              <h6 className="text-marketPair">{data.volume}</h6>
                            </div>
                            <div
                              className="spot-icon"
                              style={{
                                color: data.color,
                                background: data.backgroundColor,
                              }}
                            >
                              <IoTrendingUpSharp />
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {/* <div>
                      <h6 className="text-white">usd /Bnb</h6>
                      <h3 className="text-white">usd</h3>
                    </div>
                    <div>
                      <h3 className="text-white">usd</h3>
                    </div>
                    <div>
                      <h3 className="text-white">usd</h3>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotChart;
