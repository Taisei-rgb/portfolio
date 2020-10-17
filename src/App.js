import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from "react-mdl"

class App extends Component {
  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout fixedHeader>
          <Header
            className="header-color"
            title={<span style={{ color: 'black' }} >TAISEI KATAGIRI</span>}>
            <Navigation >
              <a href="#" style={{ color: 'black' }}>HOME</a>
              <a href="#" style={{ color: 'black' }}>ABOUT</a>
              <a href="#" style={{ color: 'black' }}>WORK</a>
              <a href="#" style={{ color: 'black' }}>CONTACT</a>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
          </Content>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
