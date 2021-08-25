import { useContext } from "react";
import { DataContext } from "../../context/data";
import {
  Heading, useDisclosure, Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button
  // DrawerCloseButton,
} from '@chakra-ui/react'
import './style.scss'
import logo from '../../utilities/assets/logo.svg'
import { HamburgerIcon } from '@chakra-ui/icons'
import List from "../sidenav/list";
// import sound2 from '../../utilities/sounds/sound2.mp3'
// import sound3 from '../../utilities/sounds/sound3.mp3'
// import sound4 from '../../utilities/sounds/sound4.mp3'
// import sound5 from '../../utilities/sounds/sound5.mp3'

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
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        Settings
      </MenuButton>
      <MenuList className='settings-list' minWidth="200px">
        <MenuOptionGroup title="Courses" type="checkbox">
          <MenuItemOption value="102">102</MenuItemOption>
          <MenuItemOption value="201">201</MenuItemOption>
          <MenuItemOption value="301">301</MenuItemOption>
          <MenuItemOption value="401js">401 - JavaScript</MenuItemOption>
          <MenuItemOption value="401py">401 - Python</MenuItemOption>
          <MenuItemOption value="401java">401 - Java</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup defaultValue={context.song} title="Active Sound" type="radio">
          <MenuItemOption onClick={() => { context.setSong("sound1") }} value="sound1">Sound 1</MenuItemOption>
          <MenuItemOption onClick={() => { context.setSong("sound2") }} value="sound2">Sound 2</MenuItemOption>
          <MenuItemOption onClick={() => { context.setSong("sound3") }} value="sound3">Sound 3</MenuItemOption>
          <MenuItemOption onClick={() => { context.setSong("sound4") }} value="sound4">Salmoon Cookies Lab</MenuItemOption>
          <MenuItemOption onClick={() => { context.setSong("sound5") }} value="sound5">After 5</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  </header>;
}

export default Nav;



