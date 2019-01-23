import React from 'react'
import { Grid, Segment, Header, Form, Input, Select, Button, Checkbox } from 'semantic-ui-react';

function YourNetworkForm({ options, onSubmit, onChange }) {
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header sub color='teal' content='Your Network' />
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Input
                style={{ marginTop: 10 }}
                name='title'
                onChange={onChange}
                value={''}
                placeholder='Description or video url link/why?' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='6-10 Volunteers?' />
            </Form.Field>
            <Form.Field>
              <Select
                style={{ textAlign: 'center' }}
                placeholder='Select your Target'
                options={options} />
            </Form.Field>
            <Button color='teal' type="button">
              next
          </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default YourNetworkForm
