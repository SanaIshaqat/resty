import React from 'react';
import './form.scss';
import { useState } from "react";
import axios from 'axios';


function Form (props){
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showTextBox, setshowTextBox] = useState(false);
  const [inputText, setInputText] = useState({});

    async function  handleSubmit(e){
    e.preventDefault();

    const  response= await axios({
      method: method,
      url: url,
    });

    const formData = {
        method:method,
        url:url,
      };
      props.handleApiCall(formData,inputText ,response.data);
      setshowTextBox(false)
}

function handleTextBox(e) {
  setshowTextBox(true);
  setMethod(e.target.id);
}
function handeleInputText(e) {
  setInputText(e.target.value);
}
function handelMethod(e) {
  setMethod(e.target.id);
}

if (method === 'GET' || method === 'DELETE' ){

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='link' type='URL' onChange={e => setUrl(e.target.value)} />
        </label>
        <label className="methods">
        <button  name="btn" id="GET" onClick={handelMethod} >GET</button>
        <button  name="btn" id="POST" onClick={handleTextBox} >POST</button>
        <button  name="btn" id="PUT" onClick={handleTextBox} >PUT</button>
        <button  name="btn" id="DELETE" onClick={handelMethod} >DELETE</button>
     
        
        </label>
          <button type="submit" data-testid="button">GO!</button>
       
      </form>
    </>
  );
}
if (method === 'POST' || method === 'PUT' ){

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='link' type='URL' onChange={e => setUrl(e.target.value)} />
        </label>
        <label className="methods">
        <button  name="btn" id="GET" onClick={handelMethod} >GET</button>
        <button  name="btn" id="POST" onClick={handleTextBox} >POST</button>
        <button  name="btn" id="PUT" onClick={handleTextBox} >PUT</button>
        <button  name="btn" id="DELETE" onClick={handelMethod} >DELETE</button>
       </label>
          <button type="submit" data-testid="mybtn">GO!</button>
        {showTextBox &&
          <textarea id="w3review" name="w3review" rows="10" cols="30" onChange={handeleInputText} />}
      </form>
    </>
  );
}
}

export default Form;