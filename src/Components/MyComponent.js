import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>MyComponent</h2>
        <button onClick={onButtonClicked}>MyComponent!</button>
      </div>
    );
  }
}

export default MyComponent;
