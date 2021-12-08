import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../Loading/Loading';

function Results (props){
 
    return (
    
      <section className="results">
        <div data-testid="results">
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
          ) : null}
        </div>
        <div data-testid="loading">
          {props.loading && (
           <div class="spinner-2">
            </div>
          )}
        </div>
      </section>   
      //   <section data-testid="results" >
      //          {props.loader===true?
      //          <div className="Loader"></div> :
      //          props.data ?
      //  <JSONPretty data ={props.data} ></JSONPretty> : <pre> <Loading /></pre>} 
      //   </section>
      );
}
export default Results;
