import React from 'react'
import { Grid, 
         Segment, 
         Header, 
         Form, 
         Checkbox, 
         Button, 
         Dropdown,
         Label, 
         Input } from 'semantic-ui-react';
const countryOptions = [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
]
function YourCommunityForm({ options, onSubmit, onChange }) {
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header 
            sub color='teal'
            content='Your Cause' />
          <Form onSubmit={onSubmit}>
            <Form.Field inline>
              <Input
                style={{ margin: 10 }}
                name='suburb'
                onChange={onChange}
                value={''}
                placeholder='Suburb' />
              <Input
                style={{ margin: 10 }}
                name='zipCode'
                onChange={onChange}
                value={''}
                placeholder='Zip/Postal Code' />
              {/* <Input
                style={{ margin: 10 }}
                name='zipCode'
                onChange={onChange}
                value={''}
                placeholder='Country' /> */}
              <Dropdown
                placeholder='Select Country'
                // fluid
                // multiple
                search
                selection
                options={countryOptions}
              />
            </Form.Field>

            <Form.Field inline>
              <Label style={{ background: '#fefafa', padding: '15px 10px' }}>
                Select Expected time or season
              </Label>
              <Input
                type='date'
                placeholder='Select your Target'
                onChange={onChange}
              />
            </Form.Field>

            <Header
              sub color='teal'
              content='Your Network' />
            <Form.Field>
              <Checkbox label='Do You have a relationship with your local Council' />
            </Form.Field>
            <Form.Field >
              <Input
                name='council'
                onChange={onChange}
                value={''}
                placeholder='Please enter the Council details' />
            </Form.Field>
            <Form.Field >
              <Label style={{ background: '#fefafa', padding: 10 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non,
                delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ...
              </Label>
              <Input
                name='keyPeople'
                onChange={onChange}
                value={''}
                placeholder='Please enter the Council details' />
            </Form.Field>
            <Button
              label="Continue"
              color='teal'
              style={{}}
              onClick={onSubmit}
            />
            <Button
              label="Back"
              style={{}}
              onClick={onSubmit}
            />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default YourCommunityForm
