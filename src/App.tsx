import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useToken } from './hooks/useToken';
import { TokenContext } from './context/tokenContext';
import './../global.less';

function AppComponent() {
  const [accessToken] = useToken();
  const {Provider} = TokenContext;

  return (
    <>
      <Provider value={accessToken}>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </Provider>
    </>
  );
}

export const App = hot(() => <AppComponent />);
