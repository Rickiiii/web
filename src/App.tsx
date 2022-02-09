import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { menuList, personalLink, unshowLink } from './constants'
import Home from './pages/home'
import Layout from './layout'
import './App.css';

function App() {

  return (
    <Layout>
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      {
        menuList.map(item => (
          <Route key={item.link} path={`/${item.link}`} component={item.component} />
        ))
      }
      {
        unshowLink.map(item => (
          <Route key={item.link} path={`/${item.link}`} component={item.component} />
        ))
      }
      {
        personalLink.map(item => (
          <Route key={item.link} path={`/${item.link}`} component={item.component} />
        ))
      }
      {/* <Redirect from='' to='/home' /> */}
      </BrowserRouter>
    </Layout>
  );
}

export default App;
