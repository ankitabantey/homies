import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="demo-footer">
        <div>
          <div>Copyright {new Date().getFullYear()}. Homies</div>
          <div>All rights reserved</div>
        </div>
        <div>
          <div>Made by the Homies</div>
        </div>
      </div>
    );
  }
}

export default Footer;
