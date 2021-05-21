import React, { Component } from 'react';
import Menu from './component/MainComponent';
import {BrowserRouter} from 'react-router-dom'; 
import './App.css';
import Main from './component/MainComponent';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store=ConfigureStore();

class  App extends Component {
  

  render(){
    
    return( 
      <Provider store={store}>
      <BrowserRouter>   
      <div>
      
      <Main/>
    </div>
    </BrowserRouter>
   </Provider>
   );
 }
}

export default App;
