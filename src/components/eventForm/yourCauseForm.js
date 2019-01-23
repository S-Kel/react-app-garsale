import React from 'react'
import { Grid, 
         Segment, 
         Header, 
         Form, 
         Select, 
         Button, 
         Label,
         TextArea,
         Checkbox} from 'semantic-ui-react';

function YourCauseForm({options, onSubmit, onChange}) {
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header 
            style={{marginBottom: 10}}
            sub color='teal' 
            content='Your Cause' />
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Label style={{background: '#fefafa', padding: 10}}>
                Descript as to why you would like to hold the world's biggest garage sale.
                Otherwise, enter a url link to a video
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non, 
                delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ...
              </Label>
              <TextArea
                name='description'
                autoHeight
                style={{ minHeight: 200 }} 
                onChange={onChange}
                value={''}
                placeholder='Description or video url link/why?' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Do you have 6-10 Volunteers?' />
            </Form.Field>
            <Form.Field>
              <Select
                style={{ textAlign: 'center' }}
                placeholder='Select your Target'
                options={options} />
            </Form.Field>
            <Button
              label="Continue"
              color='teal'
              style={{}}
              onClick={onSubmit}
            />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid> 
  )
}

export default YourCauseForm;
