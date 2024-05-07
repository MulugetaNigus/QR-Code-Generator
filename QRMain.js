import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./QRMain.module.css";

// qr code api that makes our qrcode pattern
const QRcodeAPI = "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data";

function QRMain() {

  const [UserData, setUserData] = useState("");
  const [UserDataErrors, setUserDataErrors] = useState(false);

  const handleInput = () => {
    UserData === ""
      ? setInterval(() => {
          setUserDataErrors(true);
        }, 1)
      : (window.location.href = `${QRcodeAPI}=${UserData}`);
  };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.HeaderDisplayer1}>
          Free QR Code <span className="text-warning display-1">Generator</span>
        </h1>
        <p className={styles.HeaderDisplayer2}>
          you can generate unique QR code for everthing by filling out below
          input with your data to be bind in a QR code when its scan !
        </p>
      </div>

      <div className={styles.body}>
        <div className="text-muted text-center m-2">
          Ex: email , web url , Username, phone No , Adderess and another
          information you can set !
        </div>
        <textarea
          type="text"
          name="data"
          id="data"
          placeholder="https://t.me/justcodewithme"
          className="form-control form-control-lg w-75 mx-auto border border-success"
          onChange={(event) => setUserData(event.target.value)}
          required
          cols="5"
          rows="3"
        />
        {UserDataErrors && (
          <p className="text-danger text-center my-1 fw-bold">
            * this field must be filled out !
          </p>
        )}
        <br />
        <button
          className="btn btn-warning mb-5 btn-lg w-75 fw-normal"
          onClick={handleInput}
        >
          Generate QR Code
        </button>
      </div>

      <div className={styles.qrimg}>
          <img src="" alt="" />
      </div>

      {/* footer */}
      <div className="footer">
        <div className="foot-content p-3 fixed-botto bg-lighter">
          <code className="text-info">
            Developer By Mulugeta Nigus | Copywrite &copy; 2023.
          </code>
        </div>
      </div>
    </>
  );
}

export default QRMain;
