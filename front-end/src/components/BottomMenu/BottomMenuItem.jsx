import React from 'react';
import { Link } from 'react-router-dom';

class BottomMenuItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li class="bottom-menu-item">
                    <Link to={this.props.link}>
                        <div className="bottom-menu-icon">
                            {this.props.icon}
                        </div>

                        <div className="bottom-menu-title">
                            {this.props.title}
                        </div>
                    </Link>
                </li>
            </React.Fragment>
        );
    }
}

export default BottomMenuItem;