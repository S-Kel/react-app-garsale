import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react';

function LoginMenu(props) {
  const { onLogout,username } = props;
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src='/assets/user.png' />
      <Dropdown pointing="top right" text={username}>
        <Dropdown.Menu>
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Settings" icon="settings" />
          <Dropdown.Item onClick={onLogout} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

export default LoginMenu
