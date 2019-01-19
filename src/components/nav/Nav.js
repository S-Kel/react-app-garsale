import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

import { logoutUser } from "../../redux/actions/authenticateUserAction";

import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';

class Nav extends Component {
    state={
        activeItem: ''
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOnLoginClick = (e, { name }) => {
         console.log('handleOnLoginClick'); 
         this.setState({ activeItem: name });
        }
    handleOnSignoutClick = e => { 
        console.log('handleOnSignoutClick');
        this.props.logoutUser();
    }
    handleOnRegisterClick = (e, { name })=> { 
        console.log('handleOnRegister');
        this.setState({ activeItem: name });
    }

    render() {
        const { loggedIn } = this.props;      
        const { activeItem } = this.state;       
        return(
            <Menu icon='labeled' size='mini' style={{paddingLeft: 20, paddingRight: 20}}>
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
                    : (<LogoutMenu    
                            active={activeItem === 'sign in'}                                                     
                            // onClick={this.handleItemClick}                            
                            onLogin={ this.handleOnLoginClick } 
                            onRegister={this.handleOnRegisterClick} />)                
                }

            </Menu>
        );
        
    };
};

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn   
})


// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, {logoutUser})(Nav);