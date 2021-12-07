import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../Loading/Loading';

function Results (props){
    return (
        <section data-testid="results" >
                { props.data ?
       <JSONPretty data ={props.data} ></JSONPretty> : <pre> <Loading /></pre>
      }
      
     

        </section>
      );
}


export default Results;