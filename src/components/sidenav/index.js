import { useContext } from "react";
import Card from "./cards";
import { DataContext } from "../../context/data";
import "./style.scss";

function SideNav() {
  const context = useContext(DataContext);

  return <div className="sidenav">Side Nav {context.test}</div>;
}

export default SideNav;
