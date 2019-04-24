import React, { Component } from 'react';
import axios from 'axios'


class MarketsContainer extends Component{

  constructor(props) {
    super();
      this.state = {
        items: [],
        isLoaded: false,
      };
 
}

  _getTickerBySymbol(data) {
        let ticker = {}
        data.forEach(item => {
            let symbol = item.symbol || item.s;
            ticker[symbol] = {
                symbol: symbol,
                lastPrice: item.lastPrice || item.c,
                priceChange: item.priceChange || item.p,
                priceChangePercent: item.priceChangePercent || item.P,
                highPrice: item.highPrice || item.h,
                lowPrice: item.lowPrice || item.l,
                quoteVolume: item.quoteVolume || item.q,
            }
        })
        return ticker;
        
    }


componentDidMount(){

    fetch('https://api.binance.com/api/v1/time')

        .then(res => res.json())
        .then(json => {
              this.setState({
                isLoaded: true, 
                items: json,
                
              })
              debugger
      
        });
        
        
}


  render(){
    let { isLoaded , items } = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else {

    
        return(
          <div>
            <ul>
              {items.map(item => (
                <li>
                 symbols: {item.symbols}
                </li>
              ))}
            </ul>
          </div>
        )
    }
  }
}

export default MarketsContainer;
