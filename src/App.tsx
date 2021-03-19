import React from 'react'
import {hot} from 'react-hot-loader/root'
import CardsList from './components/Content/CardsList/CardsList'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
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