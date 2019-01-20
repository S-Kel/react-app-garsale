import React, { Component } from 'react'
import {Grid, Message } from 'semantic-ui-react'

class DismissibleFlashMessage extends Component {
  state = { visible: true }

  handleDismiss = () => this.setState({ visible: false })

  render() {
    const {visible} = this.state;
    return (
      visible
        ? (<Grid centered style={{marginTop: '2rem'}}>
            <Message        
              success
              size='tiny'
              onDismiss={this.handleDismiss}
              header='Welcome back!'
              content='This is a special notification which you can dismiss.'
            />          
          </Grid>)
        : (<div></div>)
    );
  }
}

export default DismissibleFlashMessage