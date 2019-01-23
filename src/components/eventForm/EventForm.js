import React, { Component } from 'react';

import HostDetailsForm from './hostDetailsForm';
import YourCauseForm from './yourCauseForm';
import YourNetworkForm from './yourNetworkForm';
import YourCommunityForm from './yourCommunityForm';


class CreateEventForm extends Component {
  state={
    options: 
    [
      { value: '1', text: '$100k - $200k' },
      { value: '2', text: '$200k - $300k' },
      { value: '3', text: '$300k - $400k' },
      { value: '4', text: '$400k - $500k' },
      { value: '5', text: '$500k - $600k' },
      { value: '6', text: '$600k - $700k' },
      { value: '7', text: '$800k+' },
    ]
  }
  handleSubmit =e=>{}
  handleInputChange =e=>{}
  render() {
    return (
      <div>
        <HostDetailsForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        />
        <YourCauseForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        />
        <YourCommunityForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        />
        {/* <YourNetworkForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        /> */}
      </div>
      
       
    )
  }
}

export default CreateEventForm;