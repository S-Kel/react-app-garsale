import React from 'react'
import {
  Grid,
  Segment,
  Header,
  Form,
  Input,
  Button,
  Icon
} from 'semantic-ui-react';

function HostDetailsForm({ options, onSubmit, onChange }) {
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header sub color='teal' content='Your Details' />
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <input
                style={{ marginTop: 10 }}
                name='firstName'
                onChange={onChange}
                value={''}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <input
                name='lastName'
                onChange={onChange}
                value={''}
                placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Input
                name='email'
                type='email'
                iconPosition='left'
                onChange={onChange}
                placeholder='Email'>
                <Icon name='at' />
                <input />
              </Input>
            </Form.Field>
            <Form.Field>
              <input
                name='organization'
                onChange={onChange}
                value={''}
                placeholder='Your Organization' />
            </Form.Field>

            <Form.Field inline>
              <Input
                name='social'
                iconPosition='left'
                onChange={onChange}
                placeholder='Your links to social media pages'>
                <Icon name='users' circular inverted color='teal' />  
                <Button color='teal' type="button"> Add links</Button>              
                <input />                
              </Input>
            </Form.Field>           

          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default HostDetailsForm;
