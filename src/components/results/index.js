import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results (props){
    return (
        <section data-testid="results" >
                { props.data &&
       <JSONPretty data ={props.data} ></JSONPretty>
      }
      
     

        </section>
      );
}


export default Results;