import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { withLastLocation } from 'react-router-last-location';

import { authenticateUser, logoutUser } from "../../redux/actions/authenticateUserAction";

class Authentication extends Component {

    componentDidMount = () => {
        // if (this.props.authType === 'logout') {
        //     this.props.logoutUser();
        //     console.log('You have been logged out');
        // }
    }

    componentDidUpdate = (prevProps, prevState) => {
        // const { loggedIn, user, error } = this.props
        // loggedIn && console.log('You have been logged in as', user);
        // error && console.log(error.message);
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        const userRoute = this.props.history.location.pathname;
        console.log('User Route',userRoute);

        const postData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        this.props.authenticateUser(userRoute, postData);
    };

    render() {
        const {loggedIn, lastLocation } = this.props
        const from = lastLocation ? lastLocation.pathname : '/';
        const authType  = this.props.history.location.pathname.split('/')[2];
        
        return (
            <Fragment>
                {loggedIn && <Redirect to={from} />}
                {authType === 'logout' && this.props.history.push('/') /*this.props.history.push(from) <Redirect to={from} />*/}
                {authType === 'register' && <RegistrationForm submit={this.handleSubmit} />}
                {authType === 'login' && <LoginForm submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    // authType: PropTypes.oneOf(['register', 'login', 'logout']).isRequired,
    authenticateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth.authenticatedUserEmail,
    error: state.auth.authError
})

// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { authenticateUser, logoutUser })(withLastLocation(Authentication));


// const userRoute = this.props.authType === 'register' ? '/users/register' : '/users/login';