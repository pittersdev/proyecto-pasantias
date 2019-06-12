import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import './suport.css'
import 'react-bootstrap'
import Cars from './cars';

const Suport = (props) => {
  return (
   <div>
     <div className ="cars col-lg-8 col-md-6 col-sm-12">
      <Cars/>
     </div>
      <div className ="twitter col-lg-8col-md-6 col-sm-12">
          <Timeline
            dataSource={{
              sourceType: 'elpitters2',
              screenName: 'CriptoNoticias'
            }}
            options={{
              username: 'elpitters2',
              height: '900',
              width: '800'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
      </div>
   </div>
  

    
   
  )
}

export default Suport;
