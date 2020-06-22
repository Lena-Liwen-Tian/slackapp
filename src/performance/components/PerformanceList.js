import React from 'react';

import PerformanceItem from './PerformanceItem';

import './MovieList.css';

const PerformanceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
   
          <h2>No performance.</h2>
    
      </div>
    );
  }

  return (
    <React.Fragment>

    <table className="users-list">
    <tr>
     <td className="head">
        Username   
      </td>
      <td className="head">
        Userid    
      </td>
      <td className="head">
        Status
      </td>
      <td className="head">
        Time
      </td>
    </tr>

      {props.items.map(movie => (
        
        <PerformanceItem
          name={movie.name}
          userid={movie.userid}
          time={movie.time}
          status={movie.status}
        />
       
        
      ))}
    
     </table>
    </React.Fragment>
  );
};

export default PerformanceList;
