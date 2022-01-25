// Button.js
import React from 'react';

export class Button extends React.Component {

  handleClick(message){
    alert(message);
  }

  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}