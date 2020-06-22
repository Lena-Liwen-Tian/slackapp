import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import {Link} from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
 const Movie = props => {
     let genre = props.des.Genre;
     return(
      <React.Fragment>
    <div className="card mb-3" style={{maxwidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">  
          <img src= {props.des.Poster} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.des.Title}</h1>
            <p><strong>Year</strong> {props.des.Year}</p>
            <p><strong>Released</strong> {props.des.Released}</p>
            <p><strong>Director</strong> {props.des.Director}</p>
            <p><strong>Writer</strong> {props.des.Writer}</p>
            <p><strong>Actors</strong> {props.des.Actors}</p>
            <p><strong>Rating</strong>  {props.des.Ratings[0].Value}</p>
              <p><strong>Time</strong>  {props.des.Runtime}</p>
     <p><strong>Genre</strong>  {props.des.Genre}</p>
              <p>{props.des.Plot}</p>
          

            </div>
          </div>
        </div>
       
        
      </div>
  
      <p style={{fontSize:"25pt",paddingleft:"30%",color:"white",textAlign:"center"}} className="buytickets">Buy Tickets</p> 
      <div className="movielist">{props.showtimes.map(showtime=><div className="t"><Card><table ><tr><Link to={`/${showtime.cinemaid}/theaterinfo`}><td><strong>{showtime.theatre.name}</strong></td></Link></tr>
<tr><td>{showtime.date}</td></tr><tr><td>{showtime.time}</td></tr>
<tr><Link className="buy" to={`/checkout/${showtime.cinemaid}/${showtime.imdbID}`}><strong><td>BUY</td></strong></Link></tr></table></Card></div>
  )}
</div>

      </React.Fragment>

     
     )};

export default Movie;