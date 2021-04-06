import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navDisplay = links.map((link) => {
    return (
      <a key={link} href={"#" + link}>{link}</a>
    )
  })
 
  return (
    <nav>
      {navDisplay}
    </nav>
  )
}

export default NavBar;
