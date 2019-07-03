import React, {Component} from 'react';
import './price-row.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class priceRow extends Component {

  constructor(props) {
    super();

      this.state = {
        pricerow: [],
      };
}
componentDidMount(){

  //return fetch('http://192.168.0.100:4000/24h')
  return fetch('https://api.binance.com/api/v1/ticker/24hr')
            
             .then((response) => response.json())
             .then((responseJson) => {
               console.log(responseJson)      
                this.setState({
                pricerow: responseJson
               })
               
             })
             .catch((error) => {
               if(error === 'TypeError: Network request failed'){
                 console.log('error internet')
               }
               console.error(error);
             });      
}
 


  render(){
    
    return(
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="./images/cardethbtc.jpeg"alt="" />
            <Card.Body>
              <Card.Title>BTC/ETH</Card.Title>
              <Card.Text>
                Price: 0.02145 <hr/>
                Volume: 4.21.4218
              </Card.Text>
            </Card.Body>
          
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/bitcoindolar.jpg" alt="" />
            <Card.Body>
              <Card.Title>BTC/USDT</Card.Title>
              <Card.Text>
                Price: $ 9.963.61 <hr/>
                Volumen: 7.111.4218
              </Card.Text>
            </Card.Body>
           
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/ripple-xrp-btc.jpg" />
            <Card.Body>
              <Card.Title>BTC/XRP</Card.Title>
              <Card.Text>
                Price: 0.0002145 <hr/>
                Volumen: 2.454.675
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="./images/ltc-btc.jpg" />
            <Card.Body>
              <Card.Title>BTC/LTC</Card.Title>
              <Card.Text>
                Price: 0.004145 <hr/>
                Volumen: 1.111.4218
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="./images/El-Bitcoin.jpg"/>
            <Card.Body>
              <Card.Title>BTC/BCH</Card.Title>
              <Card.Text>
                Price: 0.002145 <hr/>
                Volumen: 4.545.231
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        
    );
  }

}

export default priceRow;
