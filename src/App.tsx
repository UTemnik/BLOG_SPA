import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import './../global.less';
import { PostsContextProvider } from './context/PostsContext';
import { commentContext } from './context/commentContext';

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [accessToken] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <tokenContext.Provider value={accessToken}>
      <CommentProvider
        value={{
          value: commentValue,
          onChange: setCommentValue,
        }}
      >
        <UserContextProvider>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </UserContextProvider>
      </CommentProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
