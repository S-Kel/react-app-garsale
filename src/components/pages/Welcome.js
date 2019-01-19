import React, { Fragment, Component } from 'react';
import { api } from '../../api/init';

export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: ''
    };
  };

  fetchHomepage = async () => {
    try {
      const response = await api.get("/");
      console.log(response.data);
      this.setState({ response: response.data });
    } catch (error) {
      console.error("There was a problem retrieving response from server", error);
    };
  };

  componentDidMount = () => {
    this.fetchHomepage();
  };

  render() {
    return (
      <Fragment>
        <h2>Welcome</h2>
        <p>{this.state.response}</p>
      </Fragment>
    );
  };
};


