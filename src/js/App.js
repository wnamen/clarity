import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';

import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentWillMount = () => {
    const url = 'http://marketdata.websol.barchart.com/getQuote.json?key=25df1e65da1e4a624c404c83a2f376ec&mode=R&symbols=';
    const topQuotes = ['aapl','msft','xom','jnj','amzn','fb','brk.b','ge','t','jpm','pg','goog','googl','wfc','vz','pfe','cvx','intc','mrk','ko','bac','cmcsa','v','hd','csco'];
    const callback = '&callback=JSON_CALLBACK';

    axios.get(`${url}${topQuotes}${callback}`, {responseType: 'json'})
      .then(response => this.setState({quotes: response.data.results}))
      .catch(error => console.log(error));
  }

  render = () => {
    const { quotes } = this.state;
    const mappedQuotes = quotes.map((quote, index) => <Quote key={index} data={quote} />)
    console.log(quotes);

    return (
      <div>
        <AppBar />
        { mappedQuotes }
      </div>
    );
  }
}

export default App;
