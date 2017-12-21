import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

const LineBreak = styled.hr`
  clear: both;
  border-top: solid #e8e8e8;
  border-width: 1px 0 0;
  margin: 10px;
  height: 0;
  width: 100%;
`;

const Brand = styled.h1.attrs({
  className: 'title is-2',
}) `
  margin: 1em 0 0 0;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

class Header extends Component {
  state = {  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <LineBreak />
        <Brand>Simple.</Brand>
      </div>
    );
  }
}

export default Header;