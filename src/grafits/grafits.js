import React from 'react';
import "./grafits.css";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
const Related = () => (
 
  <div className="Related">
  <TradingViewWidget 
  symbol="BTCUSD" 
  theme={Themes.LIGHT}
  locale="fr"
  width ="100%"
  />
  </div>
 
);

export default Related;
