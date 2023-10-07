// src/components/ApiTest.js

import React, { Component } from 'react';
import axios from 'axios';

class ApiTest extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
      error: null,
    };
  }

  componentDidMount() {
    // Replace with your Laravel API endpoint
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        this.setState({ response: response.data });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { response, error } = this.state;

    return (
      <div>
        <h2>API Test</h2>
        {error && <p>Error: {error}</p>}
        {response && (
          <div>
            <h3>API Response:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default ApiTest;
