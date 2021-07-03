import { useContext } from "react";
import { DataContext } from "../../context/data";
import './style.scss'

function Nav() {
  const context = useContext(DataContext);
  return <header>Nav {context.test}</header>;
}

export default Nav;



