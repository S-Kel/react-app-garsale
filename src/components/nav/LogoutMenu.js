import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

function LoginMenu(props) {
  const { onLogin, onRegister } = props;
  return (
    <Menu.Menu position="right">
      <Menu.Item 
        onClick={onLogin}
        as={NavLink} 
        to='/users/login' 
        name='Login' >
          <Icon name='sign in' />Login
      </Menu.Item>
      <Menu.Item 
        onClick={onRegister}
        as={Link} 
        to='/users/register' 
        name='Register' 
        style={{ marginLeft: '0.5em' }} >
          <Icon name='user plus' />Register
      </Menu.Item>
    </Menu.Menu>
  )
}

export default LoginMenu
