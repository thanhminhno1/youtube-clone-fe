import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import history from './modules/history';
import theme from './modules/theme';
import RoutePublic from './components/RoutePublic';
import GlobalStyles from './components/GlobalStyles';
import './App.css';

const AsyncHome = lazy(() => import('./container/Home'));

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
              <RoutePublic isAuthenticated={false} path="/" component={AsyncHome} />
            </Switch>
          </Suspense>
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
