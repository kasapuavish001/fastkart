"use client";

import styles from "./page.module.scss";
import ArrowDown from "../../../public/assests/icons/angle-small-down.svg";
import FileIcon from "../../../public/assests/icons/file-pdf.svg";
import { useState } from "react";
const page = () => {
  const [Open, SetOpen] = useState(false);

  const handleOpen = () => {
    SetOpen(!Open);
  };

  const data = [
    {
      id: 1,
      name: "Bangladesh",
    },
    {
      id: 2,
      name: "India",
    },
    {
      id: 3,
      name: "Pakistan",
    },
  ];

  const [Select, setSelect] = useState("Select Country");

  const phdata = [
    {
      id: 1,
      code: " BAN +880",
    },
    {
      id: 2,
      code: " IND +91",
    },
    {
      id: 1,
      code: " PAK +92",
    },
  ];

  const [Showphone, setShowphone] = useState(false);
  const [Code, setCode] = useState("BAN +880");
  return (
    <div className="contain">
      <div className={styles.titlebox}>
        <h1 className={styles.title}>
          Application <span>Form</span>
        </h1>
      </div>

      <form action="">
        <div className={styles.inputbox}>
          <div className={styles.warpinput}>
            <label htmlFor="firstname">
              First Name <span className={styles.req}>*</span>
            </label>
            <input
              className={styles.input}
              name="firstname"
              type="text"
              required
            />
          </div>
          <div className={styles.warpinput}>
            <label htmlFor="lastname">
              Last Name <span className={styles.req}>*</span>
            </label>
            <input
              className={styles.input}
              name="lastname"
              type="text"
              required
            />
          </div>
        </div>

        <div className={styles.inputbox}>
          <div className={styles.warpinput}>
            <label htmlFor="Email">
              Email <span className={styles.req}>*</span>
            </label>
            <input
              className={styles.input}
              name="Email"
              type="email"
              required
            />
          </div>
          <div className={styles.warpinput}>
            <label htmlFor="Phone">
              Phone <span className={styles.req}>*</span>
            </label>
            <div
              onClick={() => setShowphone(!Showphone)}
              className={styles.phone}
            >
              <div className={styles.phncountry}>
                <p>{Code}</p>
                <ArrowDown className={styles.picon} width="20" height="20" />
              </div>
              <input
                className={styles.pinput}
                type="number"
                name="Phone"
                id=""
              />
            </div>

            {Showphone && (
              <ul className={styles.phncounties}>
                {phdata.map((each) => {
                  return (
                    <button
                      onClick={() => {
                        setCode(each.code);
                        setShowphone(!Showphone);
                      }}
                      type="button"
                      className={styles.pbtn}
                    >
                      <li>{each.code}</li>
                    </button>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.inputbox}>
          <div className={styles.warpinput}>
            <label htmlFor="#">Select City</label>
            <button
              type="button"
              className={styles.country}
              onClick={handleOpen}
            >
              <span className={styles.text}>{Select}</span>
              <span className={styles.icon}>
                <ArrowDown
                  className={Open ? `${styles.arrow}` : null}
                  width="20"
                  height="20"
                />
              </span>
            </button>
            {Open && (
              <ul className={styles.citylist}>
                {data.map((each) => {
                  return (
                    <li>
                      <button
                        onClick={() => {
                          setSelect(each.name);
                          SetOpen(!Open);
                        }}
                        className={styles.btn}
                        type="button"
                      >
                        <p>
                          <span>{each.name}</span>
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className={styles.warpinput}>
            <label htmlFor="CityName">City Name</label>
            <input className={styles.input} type="text" />
          </div>
        </div>

        <div className={styles.inputbox}>
          <div class={styles.files}>
            <label>
              <FileIcon className={styles.icon} />
              <input className={styles.input} type="file" size="100" />
              <h3>Support .PDF File</h3>
              <p>Click or Drag & Drop the file</p>
            </label>
          </div>
        </div>

        <div className={`${styles.inputbox} ${styles.inputbox2}`}>
          <div className={styles.warpinput}>
            <div className={styles.submitbtn}>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
