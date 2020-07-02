import React from 'react';
import { Link } from 'react-router-dom';

import './MovieItem.css';

const PerformanceItem = props => {
  return (
     <React.Fragment>
      <tr>
      <td>
        {props.name}
        </td>
      <td>
        {props.userid}
        </td>
        <td>
        {props.status}
        </td>
        <td>
        {props.time.toString().split("GMT")[0]}
        </td>
        </tr>
        </React.Fragment>

  );
};

export default PerformanceItem;
