import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MenuBar, Login, BoardList, MyPage } from './containers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <MenuBar />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 700, marginTop: 50 }}>
              <Switch>
                <Route exact path="/" component={BoardList}/>
                <Route path="/Login" component={Login}/>
                <Route path="/QUIZE" component={BoardList}/>
                <Route path="/MyPage" component={MyPage}/>
                <Route component={BoardList}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
