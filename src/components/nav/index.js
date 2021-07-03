import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from '@chakra-ui/react'
import './style.scss'
import logo from '../../utilities/assets/logo.svg'

function Nav() {
  const context = useContext(DataContext);
  // logo center
  return <header className='flexRow'>
    <img style={{ width: '42px' }} alt='logo' src={logo} />
    <Heading ml='12px' as="h1" color='#F5F5F5'  size="lg" >Insighteer</Heading>
  </header>;
}

export default Nav;



