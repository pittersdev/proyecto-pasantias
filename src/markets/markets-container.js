import React, { Component } from 'react';
import './markets.css';
import Table from 'react-bootstrap/Table'
class MarketsContainer extends Component{
  
  constructor(props) {
    super();
      this.state = {
        data: [],
      };  
}


 

componentDidMount(){

  //return fetch('http://192.168.0.100:4440/24h')
  return fetch('https://api.binance.com/api/v1/ticker/24hr')
            
             .then((response) => response.json())
             .then((responseJson) => {
               console.log(responseJson);      
                this.setState({
                 data: responseJson  
               })
             })
             .catch((error) => {
               if(error === 'TypeError: Network request failed'){
                 console.log('error internet');
               }
               console.error(error);
             });      
}
 

  render(){
   //var {  datas  } = this.state;
   // if(!isLoaded){
   //   return <div>Loading...</div>
   // }
    return(
       
          <div>
          
            <Table responsive>
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Last Price</th>
                  <th>24h Change</th>
                  <th>24h High</th>
                  <th>24h Low</th>
                  <th>24h Volume</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => (
                  <tr key={item.symbol}>
                    <td>{item.symbol}</td>
                    <td>{item.lastPrice}</td>
                    <td>{item.priceChangePercent}%</td>
                    <td>{item.highPrice}</td>
                    <td>{item.lowPrice}</td>
                    <td>{item.quoteVolume}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </div>
      
    )
    
  }
}

export default MarketsContainer;
