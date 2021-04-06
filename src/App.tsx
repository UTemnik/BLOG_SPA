import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import './../global.less';

function AppComponent() {
  const [accessToken] = useToken();

  return (
      <tokenContext.Provider value={accessToken}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
