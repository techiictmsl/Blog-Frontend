// import DashBoard from "./Dashbaord";
import Navbar from "./Navbar";
import { useState } from "react";

import Profile from "./Profile";
// import "./styles.css";
import { useMediaQuery } from "react-responsive";
import DashBoard from "./Dashboard";
import MobileNavBar from "./MobileNavBar";

export default function DashboardAndProfile() {
  const [state, setstate] = useState(0);
  const isDesktop = useMediaQuery({
    query: "(min-width:520px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:520px)",
  });
  return (
    <div className="App">
      {isDesktop && <Navbar changeOrder={setstate} order={state} />}
      {isMobile && <MobileNavBar changeOrder={setstate} order={state} />}
      {/* <DashBoard /> */}
      {state === 0 ? <DashBoard /> : <Profile />}
      {/* <Profile /> */}
    </div>
  );
}
