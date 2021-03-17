import React from 'react'
import {hot} from 'react-hot-loader/root'
import CardsList from './Content/CardsList/CardsList'
import Content from './Content/Content'
import Header from './Header/Header'
import Layout from './Layout/Layout'
import './main.global.css'

const AppComponent = () => {
  return (
      <div>
          <Layout>
            <Header />
            <Content>
             <CardsList />
            </Content> 
          </Layout>
      </div>
  )
}

export const App = hot(AppComponent);