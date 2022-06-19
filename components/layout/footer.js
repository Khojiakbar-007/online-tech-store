import { TextField } from "@mui/material";
import CustomButton from "../shared/button";

function Footer() {
  return (
    <>
      <footer id="main-footer">
        <div className="newsletter-signup fb-row">
          <div className="text">
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>

          <div className="email">
            <TextField
              sx={{
                color: "white",
                "& .MuiInputLabel-outlined, & .MuiFormLabel-filled, & .MuiOutlinedInput-notchedOutline": {
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
              }}
            >
              Subscribe
            </CustomButton>
          </div>
        </div>
        Hi! I'm Footer!
      </footer>
    </>
  );
}

export default Footer;
