import React from 'react';
import "./grafits.css";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Related = () => (
  <TradingViewWidget 
  symbol="NASDAQ:AAPL" 
  theme={Themes.DARK}
  locale="fr"
  
 
  />
);

export default Related;
