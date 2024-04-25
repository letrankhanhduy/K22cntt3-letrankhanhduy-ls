import React, { Component } from 'react';
import ltkd_EventForm from './ltkd_EventForm';
import ltkd_EventForm2 from './ltkd_EventForm2';
import ltkd_EventForm3 from './ltkd_EventForm3';
import ltkd_EventForm4 from './ltkd_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Event form Demo</h2>
        <ltkd_EventForm />
        <ltkd_EventForm2 />
        <ltkd_EventForm3 />
        <ltkd_EventForm4 Name="Lê Trần Khánh Duy"/>
      </div>
    );
  }
}

export default App;

