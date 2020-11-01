import React from 'react';
import './calculate.css';
import moment from 'moment';


const Title = props => {
    const today = moment().startOf('week').format('MM-DD-YYYY HH:mm:ss');
    const end = moment().endOf('week').format('MM-DD-YYYY HH:mm:ss');
    // var cur = new Date();
    // var last = new Date(cur.getTime() - (4 * 24 * 60 * 60 * 1000 + 11 * 60 * 60 * 1000)).toString();
    // cur = cur.toString().split(' ');
    // last = last.split(' ');
    // var curs = "";
    // var lasts = "";
    // for(var i = 0; i < 4; i++){
    //     curs += cur[i] + " ";
    //     lasts += last[i] + " ";
    // }
return (<h2>{today} - {end}</h2>)
}
export default Title;