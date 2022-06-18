import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

function Header() {
  return (
    <header>
      <div style={{ backgroundColor: "black" }} className="top-header">
        <AiFillFacebook color="white" />
        <AiFillInstagram color="white" />
      </div>
      <nav></nav>
    </header>
  );
}

export default Header;
