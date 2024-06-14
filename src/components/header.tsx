import React from "react";
import { ModeToggle } from "./mode-toogle";
const Header = () => {
  return (
    <header>
      <div className="flex justify-end py-3">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
