import { useContext } from "react";
import { DataContext } from "../../context/data";
import {
  Heading, useDisclosure, Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
} from '@chakra-ui/react'
import './style.scss'
import logo from '../../utilities/assets/logo.svg'
import { HamburgerIcon } from '@chakra-ui/icons'
import List from "../sidenav/list";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const context = useContext(DataContext);

  const handleClick = (newSize) => {
    onOpen()
  }

  return <header className='flexRow'>
    <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader p='0' className='flexCol' color='#F5F5F5' >Teachers Assistants</DrawerHeader>
        <DrawerBody p='0' mt='5vh'>
          <List users={context.users} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    <HamburgerIcon onClick={() => handleClick()} id='ham-menu' w={8} h={8} color="#F4F6FA" />
    <img style={{ width: '24px' }} alt='logo' src={logo} />
    <Heading ml='12px' as="h1" color='#F5F5F5' fontSize='18px' >Insighteer</Heading>
  </header>;
}

export default Nav;



