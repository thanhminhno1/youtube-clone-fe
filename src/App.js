import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import './App.css';
import history from './utils/history';
import theme from './utils/theme';
import RoutePublic from './components/RoutePublic';
import GlobalStyles from './components/GlobalStyles';
import { MainLayout, EmptyLayout } from './components/Layouts';

const AsyncHome = lazy(() => import('./pages/Home/HomeContainer'));
const Login = lazy(() => import('./pages/Login/LoginContainer'));

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'pt-br' }}
            encodeSpecialCharacters={true}
            defaultTitle="youtube bootcamp"
            titleTemplate="youtube-bootcamp"
            titleAttributes={{ itemprop: 'name', lang: 'en-vi' }}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <RoutePublic
                isAuthenticated={false}
                path="/"
                component={AsyncHome}
                layout={MainLayout}
                exact
              />
              <RoutePublic
                isAuthenticated={false}
                path="/login"
                component={Login}
                layout={EmptyLayout}
                exact
              />
            </Switch>
          </Suspense>
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
