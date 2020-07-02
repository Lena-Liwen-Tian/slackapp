import React from 'react';
import './calculate.css';



const Title = props => {
    var cur = new Date();
    var last = new Date(cur.getTime() - (4 * 24 * 60 * 60 * 1000 + 11 * 60 * 60 * 1000)).toString();
    cur = cur.toString().split(' ');
    last = last.split(' ');
    var curs = "";
    var lasts = "";
    for(var i = 0; i < 4; i++){
        curs += cur[i] + " ";
        lasts += last[i] + " ";
    }
return (<h2>{lasts} - {curs}</h2>)
}
export default Title;