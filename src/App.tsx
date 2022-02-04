import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { menuList } from './constants'
import Layout from './layout'
import './App.css';

function App() {

  return (
    <Layout>
      <BrowserRouter>
      {
        menuList.map(item => (
          <Route key={item.link} path={`/${item.link}`} component={item.component} />
        ))
      }
      </BrowserRouter>
    </Layout>
  );
}

export default App;
