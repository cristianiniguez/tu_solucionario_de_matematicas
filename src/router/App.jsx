import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Course from '../pages/Course';
import Subjects from '../pages/Subjects';
import Subject from '../pages/Subject';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

import '../assets/styles/styles.css';
import '../assets/styles/normalize.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/materias' component={Subjects} />
        <Route exact path='/materias/:name' component={Subject} />
        <Route exact path='/curso/:id' component={Course} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
