import Avatar from "@mui/material/Avatar";
import { BiSupport } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdSavings } from "react-icons/md";

function Placeholder() {
  return (
    <section id="placeholder">
      <div className="container-fluid fb-row fb-row--spacer fb--w">
        <div className="mini-card fb-col">
          <Avatar sx={{ backgroundColor: "var(--color-3)" }}>
            <BiSupport color="white" />
          </Avatar>

          <h4 className="mini-card__h4">Product Support</h4>
          <p className="mini-card__p">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>

        <div className="mini-card fb-col">
          <Avatar sx={{ backgroundColor: "var(--color-3)" }}>
            <RiAccountPinCircleFill color="white" />
          </Avatar>

          <h4 className="mini-card__h4">Personal Account</h4>
          <p className="mini-card__p">
          With big discounts, free delivery and a dedicated support specialist.
          </p>
        </div>

        <div className="mini-card fb-col">
          <Avatar sx={{ backgroundColor: "var(--color-3)" }}>
            <MdSavings color="white" />
          </Avatar>

          <h4 className="mini-card__h4">Amazing Savings</h4>
          <p className="mini-card__p">
          Up to 70% off new Products, you can be sure of the best price.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Placeholder;
