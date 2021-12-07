import { React, useState, useEffect } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  async function callApi(requestParams) {
    setrequestParams(requestParams);
  }

  useEffect(() => {
    (async function() {
  
      const req = await fetch(requestParams.url);
      const data = await req.json();
      setdata(data);
    })()
  }, [requestParams]);

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div>
        <div> <h3>Request Method:</h3> {requestParams.method}</div>
        <div> <h3> URL:</h3> {requestParams.url}</div>
      </div>
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
