import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}><h1>HOME</h1></Link>
        <Link to={'/add-store'}><h1>ADD STORE</h1></Link>
        {this.props.children}
      </div>
    )
  }
};

export default Layout;
