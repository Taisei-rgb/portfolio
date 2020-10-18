import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ height: '300px' }}>
        <Layout fixedHeader >
          <Header
            className="header-color"
            title={<span style={{ color: 'black' }} >TAISEI KATAGIRI</span>}
            scroll
          >
            <Navigation >
              <Link to="/" style={{ color: 'black' }}>HOME</Link>
              <Link to="/about" style={{ color: 'black' }}>ABOUT</Link>
              <Link to="/work" style={{ color: 'black' }}>WORK</Link>
              <Link to="/contact" style={{ color: 'black' }}>CONTACT</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Content />
        </Layout>
      </div>
    );
  }
}
export default App;
