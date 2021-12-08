import { React, useState, useEffect , useReducer } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/History';

const initialState = {
  requests: [],
}

//reducer-hook function 
function historyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'newSearch':
      const requests = [...state.requests, payload];
      return { requests };
    default:
      return state;
  }
}
//newSearch action 
function newSearch(requestParams, data) {
  return {
    type: 'newSearch',
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      result: data,
    },
  };
}

function App() {

   //useRecucer Hook
  const [state, dispatch] = useReducer(historyReducer, initialState);

  //useState Hook
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [requestParams, setrequestParams] = useState({});

  async function callApi(requestParams) {
    setrequestParams(requestParams);
  }

  useEffect(() => {
    (async function() {
    try {
      const raw = await fetch(requestParams.url);
      const data = await raw.json();
      setdata(null);
      setloading(true);
      setTimeout(() => {
        setloading(false);
        setdata(data);
      }, 700);
      dispatch(newSearch(requestParams, data));
    } catch (e) {
      setdata(null);
    }})()
  }, [requestParams]);

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div>
        <div><h3>Current Request Method:</h3>{requestParams.method}</div>
        <div><h3>Current URL:</h3>{requestParams.url}</div>
      </div>
      <History handleApiCall={callApi} history={state.requests} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;