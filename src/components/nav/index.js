import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from '@chakra-ui/react'
import './style.scss'
import logo from '../../utilities/assets/logo.svg'

function Nav() {
  const context = useContext(DataContext);
  // logo center
  return <header className='flexRow'>
    <img style={{ width: '38px' }} alt='logo' src={logo} />
    <Heading ml='12px' as="h1" color='#F5F5F5'  fontSize='24px' >Insighteer</Heading>
  </header>;
}

export default Nav;



