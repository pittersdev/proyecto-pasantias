import React, {Component} from 'react';
import './price-row.css';
import axios from 'axios'



class PriceRow extends Component {

handleClick =(event) =>{
  //console.log(this.props.image)
  }
  constructor(props) {
    super();

      this.state = {
        pricerow: []
      };
}
componentDidMount(props){

  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR' )

    .then ( res => {
      const pricerow = res.data
        console.log(pricerow);
        this.setState ({pricerow: pricerow})
      })

    .catch( error => {
      console.log(error)
    })

}


  render(){

    return(

    <div>
    pricerow
    </div>

  
    );
  }

}

export default PriceRow;
