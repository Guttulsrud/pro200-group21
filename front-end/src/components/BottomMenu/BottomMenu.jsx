import React from 'react';
import { Footer } from '../../elements/StyledFooter';
import BottomMenuItem from '../../components/BottomMenu/BottomMenuItem';
import { items } from '../../utils/BottomMenuItems';


class BottomMenu extends React.Component {
  render() {
    return (
      <Footer>
        <nav>
          <ul className="bottom-menu-list">
            {items.map((item) => (
              <BottomMenuItem key={item.index} title={item.title} icon={item.icon} link={item.link} />
            ))}
          </ul>
        </nav>
      </Footer>
    );
  }
};

export default BottomMenu;
