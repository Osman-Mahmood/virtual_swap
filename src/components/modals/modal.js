import React from "react";
import Modal from "react-bootstrap/Modal";
import BnbLogo from "../../Assets/coins/bnb-logo.png";
import "./modal.css";

function modal(props) {

  return (
    <>
      <Modal
        size="md"
        aria-labelledby="example-modal-sizes-title-lg"
        {...props}
      >
        <Modal.Header className="modal_bg" closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Token Lists
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-4">
              <h5>Token Pairs</h5>
            </div>
            <div className="mt-2 gap-2 coin_overflow">
              {props.data.map((coins) => {
                return (
                  <>
                    <div>
                      <p className="text_coin">
                        <img
                          src={coins.pic}
                          className="img-fluid"
                          width={"30px"}
                          alt=""
                        />
                        &nbsp;
                        <span>{coins.coin}</span>
                      </p>
                      {/* <img
                        src={coins.pic}
                        className="img-fluid"
                        width={"20px"}
                        alt=""
                      > */}

                      {/* </img> */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default modal;
