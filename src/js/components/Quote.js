import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Stats from './Stats';
import Title from './Title';
import Performance from './Performance';

import upArrow from '../../../public/images/upArrow.svg';
import downArrow from '../../../public/images/downArrow.svg';
import styles from '../../css/quote.css';

class Quote extends React.Component {
  render = () => {
    return (
      <div>
        <Paper style={{'height': '25vh', 'margin':'1vw 2vw', 'display':'flex', 'fontFamily':'Ubuntu'}} zDepth={2} >
          { this.props.data.netChange > 0 ? <div style={{'width':'33%', 'display':'flex','justifyContent':'center', 'alignItems':'center'}}><img style={{'height':'20vh'}} src={upArrow} /></div> : <div style={{'width':'33%', 'display':'flex','justifyContent':'center', 'alignItems':'center'}}><img style={{'height':'20vh'}} src={downArrow} /></div> }
          <Title name={this.props.data.name} symbol={this.props.data.symbol} />
          <Performance netChange={this.props.data.netChange} percentChange={this.props.data.percentChange} />
        </Paper>
      </div>
    );
  }
}
// <Stats last={this.props.data.lastPrice} open={this.props.data.open} high={this.props.data.high} low={this.props.data.low} close={this.props.data.close}/>

export default Quote;
