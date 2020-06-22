import React,{useState,useEffect} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import MovieDescription from'./MovieDescription';

  const Description = props => {
  let movieid = useParams().movieId;
  const [LoadedDes, setLoadedDes] = useState();
  const [isLoading,setisLoading] = useState(false);
  const [error, setError] = useState();
  const [Loadedshowtimes,setLoadedshowtimes] = useState();
  useEffect(() => {
     const fetchDes = async () => {
      setisLoading(true);
      try{          
        console.log(movieid);
        console.log(movieid);
        const response= await fetch(`https://pumpkintry.herokuapp.com/api/movies/${movieid}`); 
        const responseData = await response.json();
        console.log(responseData)
        if(!response.ok){
          console.log(responseData)
          throw new Error(responseData.message);
        }
        setLoadedDes(responseData.movie);
        setLoadedshowtimes(responseData.showtimes);
        
      } catch (err) {
        setError(err.message);
      }
      setisLoading(false);
    };

    fetchDes();
  },[movieid]);
  const errorHandler = () =>{
    setError=(null);
  }
 
  return (
    <React.Fragment>
    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedDes && <MovieDescription showtimes={Loadedshowtimes} des = {LoadedDes}/>}
    </React.Fragment>)

};




export default Description;