import React from 'react'
import { NavLink} from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

function LoginMenu(props) {
  const { onLogin, onRegister, active} = props;
  return (
    <Menu.Menu position="right">
      <Menu.Item 
        active={active} 
        activeClassName="active teal" 
        onClick={onLogin}
        as={NavLink} 
        to='/users/login' 
        name='Login' >
          <Icon name='sign in' />Login
      </Menu.Item>
      <Menu.Item 
        active={active}
        activeClassName="active teal" 
        onClick={onRegister}
        as={NavLink} 
        to='/users/register' 
        name='Register' 
        style={{ marginLeft: '0.5em' }} >
          <Icon name='user plus' />Register
      </Menu.Item>
    </Menu.Menu>
  )
}

export default LoginMenu
