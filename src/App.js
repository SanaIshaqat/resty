import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { BeatLoader } from 'react-spinners';

class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      data:null,
      requestParams:{},
      loadResults:false,
    }
  }
 
  callApi=(formData,inputText ,responseData)=>  {
    this.setState ({
      data:responseData,
      requestParams:formData,
    })
  }

   handleloadResults(loadResults) {
    this.setState ({
      loadResults:loadResults,
    })
  }
  render (){

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
          <div>URL: {this.state.requestParams.url}</div>
        <Form handleloadResults={this.handleloadResults} handleApiCall={this.callApi} />
        {this.state.load ? <BeatLoader load /> :  <Results data ={this.state.data} />}
        <Footer />
      </React.Fragment>
    );
  }

}

export default App;