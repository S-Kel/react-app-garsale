import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';

class Nav extends Component {
    state={
        activeItem: ''
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOnLoginClick = e => { console.log('handleOnLoginClick')}
    handleOnSignoutClick = e => { console.log('handleOnSignoutClick')}
    handleOnRegisterClick = e => { console.log('handleOnRegister')}

    render() {
        // const { loggedIn } = this.props;      
        const { activeItem } = this.state;  
        const loggedIn  = true;        
        return(
            <Menu icon='labeled' size='large' style={{paddingLeft: 5, paddingRight: 5}}>
                <Menu.Item
                    as={NavLink} to='/' 
                    name='home'
                    active={activeItem === 'home'} 
                    onClick={this.handleItemClick}
                    exact activeClassName="active teal" >
                        <Icon name='home' />Home
                </Menu.Item>
                <Menu.Item 
                    as={NavLink} to='/about' 
                    name='about'
                    active={activeItem === 'info'} 
                    onClick={this.handleItemClick}
                    activeClassName="active teal" >
                    <Icon name='info' />About
                </Menu.Item>
                <Menu.Item 
                    as={NavLink} to='/contact' 
                    name='contact'
                    active={activeItem === 'users'} 
                    onClick={this.handleItemClick}
                    activeClassName="active teal" >
                    <Icon name='users' />Contact
                </Menu.Item>          
                {
                    loggedIn 
                    ? (<LoginMenu onLogout={ this.handleOnSignoutClick } />) 
                    : (<LogoutMenu onLogin={ this.handleOnLoginClick } onRegister={this.handleOnRegisterClick} />)                
                }

            </Menu>
        );
        
    };
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,

})


// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps)(Nav);