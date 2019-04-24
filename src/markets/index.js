import React from 'react'
import Table from 'react-bootstrap/Table'

import MarketsContainer from './markets-container.js';
function Markets() {




  return(
    <div>
    <MarketsContainer/>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Pair</th>
            <th>Last Price</th>
            <th>24h Change</th>
            <th>24h High</th>
            <th>24h Low</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
    </Table>
    </div>

  );
}
export default Markets;
