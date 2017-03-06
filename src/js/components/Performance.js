import React, { Component } from 'react';
import '../../css/performance.css';

class Performance extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.netChange > 0 ? this.setState({netStyle: {'marginBottom':'10px', 'color': '#00C853', 'fontSize': '0.9em'}}) : this.setState({netStyle: {'marginBottom':'10px', 'color': '#D50000', 'fontSize': '0.9em'}});
    this.props.percentChange > 0 ? this.setState({percentStyle: {'color': '#00C853', 'fontSize': '0.9em'}}) : this.setState({percentStyle: {'color': '#D50000', 'fontSize': '0.9em'}});
  }

  render = () => {
    return (
      <div style={{'display':'flex', 'flexDirection':'column', 'justifyContent':'center', 'width':'33%'}}>
        <span style={this.state.netStyle}>Net Change: {this.props.netChange}</span>
        <span style={this.state.percentStyle}>Percent Change: {this.props.percentChange}%</span>
      </div>
    );
  }
}

export default Performance;
