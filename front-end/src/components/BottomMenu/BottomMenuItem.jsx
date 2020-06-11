import React from 'react';
import {NavLink} from 'react-router-dom';

class BottomMenuItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li className="bottom-menu-item">
                    <NavLink exact to={this.props.link} activeClassName="activeRoute" activeStyle={{color: '#00866E'}}>
                        <div className="bottom-menu-icon">
                            {this.props.icon}
                        </div>

                        <div className="bottom-menu-title">
                            {this.props.title}
                        </div>
                    </NavLink>
                </li>
            </React.Fragment>
        );
    }
}

export default BottomMenuItem;