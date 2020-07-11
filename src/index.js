import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Tb_AGV002 from './Components/Tb_AGV002';
import Alertdate from './Alertdate';
import JqxGrid from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';


ReactDOM.render(
  <React.StrictMode>
    {/* <Alertdate /> */}
    {/* <JqxGrid /> */}
     <Tb_AGV002 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
