import React from 'react';

import PerformanceItem from './PerformanceItem';
import { differenceInCalendarMonths } from 'date-fns';



const Calculate = props => {
    let dict = {};
    var last = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000  + 11 * 60 * 60 * 1000));
    
    props.items.map(item=>{
        if(!dict.hasOwnProperty(item.userid)){
            dict[item.userid] = {"name":item.name,"status":[],"time":[],"totaltime":""};
        }
        
        //date has to be in range 5 days

        var datetime = item.time;

        var d = new Date(datetime);
        // console.log(last);
        if(d.getTime() >= last.getTime()){
            // console.log(d);
            //compare the first active and the first away
            //active < away ->  away - active
            //active > away -> away - start + (one more away - start) 
            // if(dict[item.userid].status.length >= 1 && item.status === dict[item.userid].status[dict[item.userid].status.length-1]){
            //     dict[item.userid].time[dict[item.userid].time-1] = d;
            // }else{
                dict[item.userid].status.push(item.status);
                dict[item.userid].time.push(d);
            // }
            // dict[item.userid].status.push(item.status);
            // dict
            // if(item.status == "away"){
            //     dict[item.userid].away.push(d);
            // }else if(item.status == "active"){
            //     dict[item.userid].active.push(d);
            // }
        }
      
       
    })
    
    //go through the dict again and calculate the total time
    Object.keys(dict).forEach(function(key) {
        var status = dict[key].status;
        var time = dict[key].time;
        // if(away.length == 0 || active.length == 0){
        //     if(away.length!=0){
        //         dict[key].totaltime = "always away";
        //     }else if(active.length!=0){
        //         dict[key].totaltime = "always active";
        //     }
        if(status.length == 1){
            if(status[0] === "away"){
                dict[key].totaltime = "always away";
            }else{
                dict[key].totaltime = "always active";
            }
        }else if(status[0] === "active"){
            var totaltime = 0;
            var first = time[0].getTime();
      
            for(var i = 0; i < time.length;i++){
                if(i % 2 == 0){
                  first = time[i].getTime();
                }else{

                  totaltime += time[i].getTime() - first;
               
                  first = 0;
                }
            }
            if(first != 0){
                //still have one active left
                totaltime += new Date().getTime() - first;
            }
            dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
        }else if(status[0] === "away"){
            var totaltime = time[0].getTime() - last.getTime();
            var first = time[1].getTime(); 
            for(var i = 1; i < time.length; i++){
               if(i % 2 == 1){
                   first = time[i].getTime();
               }else{
                   totaltime += time[i].getTime();
                   first = 0;
               }
            }
            if(first!=0){
                totaltime += new Date().getTime() - first;
            }
            dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
        }
    })
        // }else if (active[0].getTime() < away[0].getTime()){
        //     var activeindex = 0;
        //     var awayindex = 0;
        //     var totaltime = 0;
        //     while(activeindex < active.length && awayindex < away.length){
        //         totaltime+= away[awayindex].getTime() - active[activeindex].getTime();
        //         awayindex++;
        //         activeindex++;
        //     }
        //    if(activeindex < active.length){
        //        totaltime += new Date().getTime() - active[activeindex].getTime();
        //    }
        //    if(awayindex < away.length){
        //        totaltime += away[awayindex].getTime() - active[active.length-1].getTime();
        //    }
        //    dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
        // }else{
             //active > away -> away - start + (one more away - start) 
            //  var totaltime = 0;
            //  var activeindex = 0;
            //  var awayindex = 1;
            //  console.log(away[0]);
            //  console.log(last);
            //  console.log(totaltime/3600000);
            //  while(activeindex < active.length && awayindex < away.length){
            //     totaltime+= away[awayindex].getTime() - active[activeindex].getTime();
                // console.log(totaltime);
            //     awayindex++;
            //     activeindex++;
            //  }
            //  if(activeindex < active.length){
            //     totaltime += new Date().getTime() - active[activeindex].getTime();
            // }
            // if(awayindex < away.length){
            //     totaltime += away[awayindex].getTime() - active[active.length-1].getTime();
            // }
            // console.log(totaltime);
    //         dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
    //     }             
    // });
    // console.log(dict);
    // const fetchZapier = async()=>{
    // const options = {
    //     method: "POST",
    //     headers: {"Content-Type":'application/json'},
    //     body:JSON.stringify({caculate:`${dict}`})
    // };
    // try{
    //     const response = await fetch(`https://hooks.zapier.com/hooks/catch/2256470/o8atams/`,options);
    //     const responseData = await response.json();
    //       if(!response.ok){
      
    //         throw new Error(responseData.message);
    //       }
   
    //     } catch (err) {
    //       console.log(err.message);
    //     }
    // }
    // fetchZapier();

  return (
     Object.entries(dict).map( ([key, value]) => <p> {value.name}: {value.totaltime}</p> )
  ) 
};

export default Calculate;
