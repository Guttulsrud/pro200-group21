import React from "react";
import {Div} from "../elements/divs/Div";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import Heading from "../elements/text/StyledHeading";
import Text from "../elements/text/StyledText";

class PurchaseSection extends React.Component {
constructor(props) {
    super(props);
}

    render() {
        return (
            <Div display={"flex"} width={0.95} justifyContent={"space-between"}>
                <Heading.h2>{this.props.type}</Heading.h2>
                <Div display="flex" flexDirection="center" alignItems="center">
                    <RoundBtn inactive={this.props.inactive} onClick={this.props.handleSub}><Heading.h2 margin="auto">-</Heading.h2></RoundBtn>
                    <Div mx="20px"><Heading.h3 >{this.props.qty}</Heading.h3></Div>
                    <RoundBtn onClick={this.props.handleAdd} ><Heading.h2 margin="auto">+</Heading.h2></RoundBtn>
                </Div>
            </Div>
        )
    }
}

export default PurchaseSection