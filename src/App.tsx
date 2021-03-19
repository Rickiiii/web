import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LickDog from './pages/lickDog'
import Layout from './layout'
import './App.css';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Route path="/lickDog" component={LickDog}></Route>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
