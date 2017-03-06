import React, { Component } from 'react';
import '../../css/stats.css';

class Stats extends React.Component {
  render = () => {
    return (
      <div style={{'display':'flex', 'flexDirection':'row'}}>
        <div style={{'display':'flex', 'flexDirection':'column'}}>
          <span>Last:</span>
          <span>Open:</span>
          <span>High:</span>
          <span>Low:</span>
          <span>Close:</span>
        </div>
        <div style={{'display':'flex', 'flexDirection':'column', 'marginLeft':'15px'}}>
          <span>${this.props.last}</span>
          <span>${this.props.open}</span>
          <span>${this.props.high}</span>
          <span>${this.props.low}</span>
          <span>${this.props.close}</span>
        </div>
      </div>
    );
  }
}

export default Stats;
