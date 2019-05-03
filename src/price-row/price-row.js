import React, {Component} from 'react';
import './price-row.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class PriceRow extends Component {

  constructor(props) {
    super();

      this.state = {
        pricerow: [],
      };
}
componentDidMount(){

  //return fetch('http://192.168.0.100:4440/24h')
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
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/bitcoindolar.jpg" alt="" />
            <Card.Body>
              <Card.Title>BTC/USDT</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{this.state.lasPice}
              </Card.Text>
            </Card.Body>
           
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/ripple-xrp-btc.jpg" />
            <Card.Body>
              <Card.Title>BTC/XRP</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="./images/ltc-btc.jpg" />
            <Card.Body>
              <Card.Title>BTC/LTC</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="./images/El-Bitcoin.jpg"/>
            <Card.Body>
              <Card.Title>BTC/BCH</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        
    );
  }

}

export default PriceRow;
