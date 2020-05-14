import React, { Component } from 'react';
import { Footer } from '../elements/StyledFooter';

class BottomMenu extends Component {
  render() {
    return (
      <Footer>
        <nav>
          <ul>
            <li>Ny reise</li>
            <li>Sanntidskart</li>
            <li>Billett</li>
            <li>Profil</li>
          </ul>
        </nav>
      </Footer>
    );
  }
}

export default BottomMenu;
