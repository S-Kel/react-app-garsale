import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function LoginForm(props) {
  const { submit } = props
  return(
    <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account {/* <Image src='/assets/logo.png' /> Log-in to your account */}
          </Header>
          <Form onSubmit={submit} size='large'>
            <Segment>
              <Form.Input fluid icon='user' iconPosition='left' name='email' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
              />
              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/users/register'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>    
    </div>
  );
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};