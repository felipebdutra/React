import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import CRUDComp from './components/CRUD/CRUDComp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <br></br>
    <p>
      Simple example of dynamic table created entirely using ReactJS and Typescript allow you to:
       <ul>
          <li>Add new line</li>
          <li>Edit exiting lines</li>
          <li>Remove any line in the grid</li>
       </ul> 

      <span className="text-danger">*Still in development</span>
    </p>
    <CRUDComp />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
