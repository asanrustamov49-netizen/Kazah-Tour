import scss from "./footer.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const [isSub, setIsSub] = useState<boolean>(false);
  const [email, setEmail] = useState<any>(false);
  return (
    <footer className={scss.container}>
      <div className="container1">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <div className={scss.left}>
              <div>
                <h2>Quick Links</h2>
                <div>
                  <h4>About us</h4>
                  <h4>Careers</h4>
                  <h4>Contact</h4>
                </div>
              </div>
              <div>
                <h2>Destination Guldes</h2>
                <div>
                  <h4>Europe</h4>
                  <h4>Asia</h4>
                  <h4>Africa</h4>
                  <h4>Americas</h4>
                </div>
              </div>
              <div>
                <h2>Resources</h2>
                <div>
                  <h4>Blog</h4>
                  <h4>FAQ</h4>
                  <h4>Visa info</h4>
                  <h4>Gift Cards</h4>
                </div>
              </div>
              <div>
                <h2>Legal</h2>
                <div className={scss.legal}>
                  <div className={scss.location}>
                    <span>
                      <IoLocationSharp />
                    </span>
                    <p>
                      Full Physical Addresses, <br /> Almaty City, Kazakhstan
                    </p>
                  </div>
                  <div className={scss.number}>
                    <span>
                      <BsFillTelephoneFill />
                    </span>
                    <h5>(957) 232-2598</h5>
                  </div>
                  <h3>Customer Service Hours</h3>
                  <h6>10am - 5am to 9pm- 10pm</h6>
                </div>
              </div>
            </div>
            <div className={scss.right}>
              <div className={scss.h1}>
                <h1>
                  STAY INSPIRED, <br /> SUBSCRIBE FOR EXCLUSIVE <br /> DEAL &
                  UPDATES
                </h1>
              </div>
              <div className={scss.btns}>
                <div className={scss.email}>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    style={{
                      cursor: email || isSub ? "pointer" : "not-allowed",
                    }}
                    onClick={() => {
                      const newValue = !isSub;
                      setIsSub(newValue);
                      localStorage.setItem("subscribed", String(newValue));
                    }}
                  >
                    {isSub ? "UNSUBSCRIBE" : "SUBSCRIBE"}
                  </button>
                </div>
                <AnimatePresence>
                  {isSub && (
                    <motion.div
                      className={scss.sub}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      Subscribed! <img src="./Vector.png" alt="" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className={scss.bottom}>
            <h5>Copylight www.auroratravel.com</h5>
            <div className={scss.icons}>
              <img src="./download 12.png" alt="" />
              <img src="./download 11.png" alt="" />
              <img src="./download 10.png" alt="" />
              <img src="./download 9.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
