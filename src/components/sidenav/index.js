import { useContext } from "react";
import Card from "./cards";
import { DataContext } from "../../context/data";
import "./style.scss";

function SideNav() {
  const context = useContext(DataContext);
  // context.users
  return <div className="sidenav">Side Nav</div>;
}

export default SideNav;
