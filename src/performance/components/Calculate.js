import React from 'react';

import PerformanceItem from './PerformanceItem';
import { differenceInCalendarMonths } from 'date-fns';



const Calculate = props => {
    let dict = {};
    var last = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000 + 11 * 60 * 60 * 1000));
    props.items.map(item=>{
        if(!dict.hasOwnProperty(item.userid)){
            dict[item.userid] = {"name":item.name,"away":[],"active":[],"totaltime":""};
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
            if(item.status == "away"){
                dict[item.userid].away.push(d);
            }else if(item.status == "active"){
                dict[item.userid].active.push(d);
            }
        }
      
       
    })
    //go through the dict again and calculate the total time
    Object.keys(dict).forEach(function(key) {
        var away = dict[key].away;
        var active = dict[key].active;
        if(away.length == 0 || active.length == 0){
            if(away.length!=0){
                dict[key].totaltime = "always away";
            }else if(active.length!=0){
                dict[key].totaltime = "always active";
            }
        }else if (active[0].getTime() < away[0].getTime()){
            var activeindex = 0;
            var awayindex = 0;
            var totaltime = 0;
            while(activeindex < active.length && awayindex < away.length){
                totaltime+= away[awayindex].getTime() - active[activeindex].getTime();
                awayindex++;
                activeindex++;
            }
           if(activeindex < active.length){
               totaltime += new Date().getTime() - active[activeindex].getTime();
           }
           if(awayindex < away.length){
               totaltime += away[awayindex].getTime() - active[active.length-1].getTime();
           }
           dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
        }else{
             //active > away -> away - start + (one more away - start) 
             var totaltime = 0;
             var activeindex = 0;
             var awayindex = 1;
            //  console.log(away[0]);
            //  console.log(last);
            //  console.log(totaltime/3600000);
             while(activeindex < active.length && awayindex < away.length){
                totaltime+= away[awayindex].getTime() - active[activeindex].getTime();
                // console.log(totaltime);
                awayindex++;
                activeindex++;
             }
             if(activeindex < active.length){
                totaltime += new Date().getTime() - active[activeindex].getTime();
            }
            if(awayindex < away.length){
                totaltime += away[awayindex].getTime() - active[active.length-1].getTime();
            }
            // console.log(totaltime);
            dict[key].totaltime = (totaltime / 3600000).toFixed(2).toString() + "h";
        }             
    });
    // console.log(dict);

    
  return (
     Object.entries(dict).map( ([key, value]) => <p> {value.name}: {value.totaltime}</p> )
  ) 
};

export default Calculate;
