import { useContext } from "react";
import { DataContext } from "../../context/data";
import './style.scss'

function Nav() {
  const context = useContext(DataContext);
  return <header></header>;
}

export default Nav;



