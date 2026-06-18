import scss from "./footer.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import f1 from "../../../../public/download 9.png";
import f2 from "../../../../public/download 10.png";
import f3 from "../../../../public/download 11.png";
import f4 from "../../../../public/download 12.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const {push} = useRouter()
  return (
    <footer id="footer" className={scss.container}>
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
                <button onClick={() => push("/kazahtour")} >Go For FeedBack!</button>
              </div>
            </div>
          </div>
          <div className={scss.bottom}>
            <h5>Copylight www.auroratravel.com</h5>
            <div className={scss.icons}>
              <Image src={f4} alt="" />
              <Image src={f3} alt="" />
              <Image src={f2} alt="" />
              <Image src={f1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
