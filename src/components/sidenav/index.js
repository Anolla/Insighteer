import { useContext } from "react";
import List from "./list";
import { DataContext } from "../../context/data";
import "./style.scss";
import {
  Heading,
} from "@chakra-ui/react";

function SideNav() {
  const context = useContext(DataContext);
  // context.users
  return (
    <div className="sidenav">
      <Heading p='8px' textAlign='center' size='xs'>Teachers Assistants</Heading>
      <List users={context.users} />
    </div>
  );
}

export default SideNav;
