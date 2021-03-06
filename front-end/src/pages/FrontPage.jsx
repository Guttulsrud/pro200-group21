import React from 'react';
import MapContainer from '../components/MainMap';
import TutorialDialog from '../components/TutorialDialog';

class FrontPage extends React.Component {
    state = {
        hasLs: null
    }

    componentDidMount() {
        let getData = JSON.parse(localStorage['showTutorial'])
        this.setState({
            hasLs: getData
        });

    };

    showTutorial = () => {
        this.setState({
            hasLs: false
        })

    };


    render() {

        return (

            <div>
                <MapContainer/>
                {this.state.hasLs && <TutorialDialog showTutorial={this.showTutorial}/>}
            </div>
        );

    }

};

export default FrontPage;
