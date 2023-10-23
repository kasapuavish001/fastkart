'use client'
import PanelLayout from "../PanelLayout";
import styles from "./login.module.scss";
import Home from "../../public/assests/icons/home.svg";
import Link from "next/link";
import Image from "next/image";
const page = (props) => {
  console.log(props);
  return (
    <>
      <PanelLayout>
        <div className={styles.main}>
          <div className={styles.block}>
            <div className="contain">
              <div className={styles.header}>
                <div className={styles.headtext}>{props.data.title}</div>
                <div className={styles.home}>
                  <Link href="/">
                    <Home className={styles.icon} />
                  </Link>
                  <p>{props.data.title}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logblock}>
            <div className="contain">
              <div className={styles.login}>
                <div
                  className={`${styles.box} ${styles.img}`}
                  style={{ flex: `${props.data.flex}` }}
                >
                  <div className={styles.imgcontain}>
                    <Image
                      className={styles.image}
                      src={props.data.url}
                      width={20000}
                      height={200000}
                    />
                  </div>
                </div>
                <div className={`${styles.box} ${styles.form}`}>
                  <div className={styles.formcontain}>
                    <div className={styles.title}>
                      <h1>Welcome To Fastkart</h1>
                      <h3>{props.data.pagename}</h3>
                    </div>
                    <form action="#" className={styles.loginform}>
                      {props.inputs.map((each) => {
                        return (
                          <div className={styles.inputbox}>
                            <input
                              name={each.name}
                              type="email"
                              className={styles.text}
                              placeholder=" "
                            />
                            <label htmlFor="email">{each.name}</label>
                          </div>
                        );
                      })}
                      {/* <div className={styles.inputbox}>
                        <input
                          name="email"
                          type="email"
                          className={styles.text}
                          placeholder=" "
                        />
                        <label htmlFor="email">Email Address</label>
                      </div> */}
                      {/* <div className={styles.inputbox}>
                        <input
                          name="pas"
                          type="password"
                          placeholder=" "
                          className={styles.text}
                        />
                        <label htmlFor="pas">Password</label>
                      </div> */}
                      {props.data.checkbox && (
                        <div className={styles.inputbox}>
                          <div className={styles.a}>
                            <div className={styles.b}>
                              <input type="checkbox" />
                              {props.data.inputmsg}
                            </div>
                            {props.data.state && (
                              <Link
                                className={styles.link}
                                href={props.data.link}
                              >
                                {props.data.linktext}
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                      {/* {props.data.button && ( */}
                        <div className={styles.inputbox}>
                          <button>{props.data.title}</button>
                        </div>
                      {/* )} */}
                    </form>
                    {props.data.button && (
                      <div className={styles.line}>
                        <h6>OR</h6>
                      </div>
                    )}
                    {props.data.button && (
                      <div className={styles.otherlog}>
                        <Link href="https://www.google.com/">
                          <div className={styles.box}>
                            <div className={styles.imgcontain}>
                              <Image
                                className={styles.img}
                                src="/../public/assests/images/google.png"
                                width={200}
                                height={200}
                              />
                            </div>
                            <p>Log In with Google</p>
                          </div>
                        </Link>
                        <Link href="https://www.facebook.com/">
                          <div className={styles.box}>
                            <div className={styles.imgcontain}>
                              <Image
                                className={styles.img}
                                src="/../public/assests/images/facebook.png"
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Log In With Facebook</p>
                          </div>
                        </Link>
                      </div>
                    )}
                    {props.data.button && (
                      <div className={styles.signup}>
                        <h5>{props.data.textlog}</h5>
                        <Link href={props.data.navlink}>
                          <h3>{props.data.sign}</h3>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default page;
