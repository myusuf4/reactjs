import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import StudetList from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StudetList>
    <Root />
  </StudetList>
  </>
);
