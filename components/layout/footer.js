import Image from "next/image";

import { TextField } from "@mui/material";
import CustomButton from "../shared/button";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Placeholder from "./placeholder-over-footer";
import Placeholder2 from "./placeholder-2";

function Footer() {
  return (
    <>
      <Placeholder2 />
      <Placeholder />
      <footer id="main-footer">
        <div className="newsletter-signup fb-row">
          <div className="text">
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>

          <div className="email">
            <TextField
              size="small"
              className="text-field"
              sx={{
                width: "186px",
                color: "white",
                "& .MuiInputLabel-outlined, & .MuiFormLabel-filled, & .MuiOutlinedInput-notchedOutline":
                  {
                    color: "white",
                    borderColor: "white !important",
                  },
                "& .MuiInputBase-colorPrimary": {
                  color: "white",
                },
              }}
              id="newsletter-email"
              label="Your email"
              variant="outlined"
            />
            <CustomButton
              variant="contained"
              extraStyles={{
                backgroundColor: "var(--color-3)",
                color: "var(--color-11)",
                borderRadius: "50px",
                height: "38px",
                width: "130px",
              }}
            >
              Subscribe
            </CustomButton>
          </div>
        </div>

        <div className="bottom-nav fb-row fb-row--left">
          <div className="item">
            <span>Information</span>
            <br /> <br />
            <ul>
              <li>About Us</li>
              <li>About Zip</li>
              <li>Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
              <li>Orders and Returns</li>
              <li>Contact Us</li>
              <li>Advanced Search</li>
              <li>Newsletter Subscription</li>
            </ul>
          </div>

          <div className="item address">
            {/* prettier-ignore */}
            <span style={{ fontWeight: 700, fontSize: "14px", lineHeight: "100%", color: 'var(--color-10)'}}>
              Address
            </span>
            <br />
            <br />
            <ul>
              <li>Address: Tashkent city, Uzbekistan</li>
              <li>
                Phones:{" "}
                <a href="tel:+998881238080" style={{ color: "var(--color-4)" }}>
                  +998 (88) 123 80 80
                </a>
                ,{" "}
                <a href="tel:+998901122757" style={{ color: "var(--color-4)" }}>
                  +998 (90) 112 27 57
                </a>
              </li>
              <li>We are open: 24/7</li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:xxomniknightxoji@gmail.com"
                  style={{ color: "var(--color-4)" }}
                >
                  xxomniknightxoji@gmail.com
                </a>
                , [Erkin aka, qo'shvorarsiz]
              </li>
            </ul>
          </div>
        </div>

        <hr
          style={{
            background: "#FFFFFF",
            opacity: 0.2,
            marginTop: "36px",
          }}
        />

        <div className="bottom-trash fb-row">
          <div className="logos">
            <AiFillFacebook color="gray" />
            <AiFillInstagram color="gray" />
          </div>

          {/* prettier-ignore */}
          <div className="payment-methods fb-row">
            <Image src="/icons/footer-icons/paypal.png" alt="payment-methods" width='34'  height='24' quality={100} priority/>
            <Image src="/icons/footer-icons/visa.png" alt="payment-methods" width='34'  height='24' quality={100} priority/>
            <Image src="/icons/footer-icons/maestro.png" alt="payment-methods" width='34'  height='24' quality={100} priority/>
            <Image src="/icons/footer-icons/discover.png" alt="payment-methods" width='34'  height='24' quality={100} priority/>
            <Image src="/icons/footer-icons/american-express.png" alt="payment-methods" width='34'  height='24' quality={100} priority/>
          </div>

          <div className="copyright">
            Khojiakbar & Erkin LTD. {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
