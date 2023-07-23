import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

function RightSidebar(props) {
  return (
    // Pass on our props
    <Menu {...props} right>
      <Link href="/" className="menu-item">
        <a className="pb-4">Home</a>
      </Link>
      <br />
      <Link href="/" className="menu-item">
        <a className="pb-4">Link</a>
      </Link>
      <br />
      <Link href="/" className="menu-item">
        <a className="pb-4">Link</a>
      </Link>
      <br />
      <Link href="/" className="menu-item">
        <a className="pb-4">Link</a>
      </Link>
      <br />
    </Menu>
  );
}

export default RightSidebar;
