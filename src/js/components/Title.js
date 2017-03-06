import React, { Component } from 'react';
import '../../css/title.css';

class Title extends React.Component {
  render = () => {
    return (
      <div style={{'display':'flex', 'flexDirection':'column', 'justifyContent':'center', 'width':'33%'}}>
        <span style={{'fontSize': '1.5em', 'fontWeight': '300', 'marginBottom':'10px'}}>{this.props.name}</span>
        <span style={{'fontSize': '1em', 'fontWeight': '300'}}>{this.props.symbol}</span>
      </div>
    );
  }
}

export default Title;
