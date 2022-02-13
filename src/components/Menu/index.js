import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/logo_v4.svg';

const Menu = () => {
  return (
    
    <SemanticMenu>
      <Container>
          <Image size='small' src='https://pm1.narvii.com/6387/aec14100b3ea99e02e8a53b1cc7f78da3f016b72_hq.jpg' />
          <SemanticMenu.Item to='/Home'>Card pokemons || Entrenado Edgar Calel</SemanticMenu.Item> 
        <SemanticMenu.Item to='/' position='right' >
          <Image size='small' src={logo} />
        </SemanticMenu.Item>
        {/* <SemanticMenu.Item to='/Home'>Home</SemanticMenu.Item> */}
        {/* <SemanticMenu.Item to='/' position='right'>
          Favorites
        </SemanticMenu.Item> */}
      </Container>
    </SemanticMenu>
  );
};

export default Menu;
