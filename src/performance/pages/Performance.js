
import React, { useEffect,useState } from 'react';
import PerformanceList from '../components/PerformanceList';

const Performance = () => {
  const[LoadedPeformance,setLoadedPerformance] = useState([]);
  const[isLoading,setisLoading] = useState(false);
  const[error,setError] = useState();
  // const[currentPage,setcurrentPage] = useState(1);
  // const postsPerPage = 20;
  // const [currentPosts,setcurrentPosts] = useState([]);

  useEffect(()=>{

    const fetchPerformance = async()=>{
      setisLoading(true);
      try{          
        const response= await fetch(`http://localhost:5000/api/data`); 
        const responseData = await response.json();
        if(!response.ok){
    
          throw new Error(responseData.message);
        }
        setLoadedPerformance(responseData.data);
      } catch (err) {
        setError(err.message);
      }
      setisLoading(false);
    };

    fetchPerformance();
  },[]);

  // const indexOfLastPosts = currentPage * postsPerPage;
  //  const indexOfFirstPost = indexOfLastPosts - postsPerPage;
  //  const paginate = pageNumber => setcurrentPage(pageNumber);

  // useEffect(()=>{
  //   const updatePosts=()=>{
  //   setcurrentPosts(LoadedMovies.slice(indexOfFirstPost,indexOfLastPosts))};
  //   updatePosts()},[LoadedMovies,currentPage,PaginationPage]);

  // const errorHandler = () =>{
  //   setError=(null);
  // }
   
  


  return(       
    // <React.Fragment>
    // <PaginationPage postsPerPage={postsPerPage} totalPosts={LoadedMovies.length} paginate={paginate}/>
    // isLoading && <div><LoadingSpinner /></div>)
     !isLoading && <PerformanceList items={LoadedPeformance}/>)
    // </React.Fragment>)
  };

export default Performance;



          



