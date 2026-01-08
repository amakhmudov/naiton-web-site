import { Link } from "react-router";
import NaitonLogo from "@/assets/img/naiton-logo.svg?react";

export default function Logo() {
  return (
    <>
      <Link to="/" aria-label="Home" title="Home" className="md-down:w-[52px] overflow-hidden">
        <NaitonLogo />
      </Link>
    </>
  );
}
