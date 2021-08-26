import { useState } from "react";
import DesktopNavComponent from "./DesktopNav"
import MobileNavComponent from "./MobileNav"

export interface isDrawerShownOption {
  drawerShown: boolean;
  setDrawerShown: React.Dispatch<React.SetStateAction<boolean>>
}

export interface isShownInterface {
  drawerShown: boolean;
}

const Nav = () => {

  const [drawerShown, setDrawerShown] = useState(false);
  return (
    <>
      <DesktopNavComponent />
      <MobileNavComponent drawerShown={drawerShown} setDrawerShown={setDrawerShown} />
    </>
  )
}

export default Nav
