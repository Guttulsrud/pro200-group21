import React from "react";
import {Div} from "../elements/divs/Div";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import Heading from "../elements/text/StyledHeading";
import Text from "../elements/text/StyledText";
import {AddIcon} from "./Icons/AddIcon";
import {SubIcon} from "./Icons/SubIcon";

class PurchaseSection extends React.Component {
constructor(props) {
    super(props);
}

    render() {
        return (
            <Div display={"flex"} width={0.95} justifyContent={"space-between"}>
                <Heading.h2>{this.props.type}</Heading.h2>
                <Div display="flex"  alignItems="center">
                    <RoundBtn inactive={this.props.inactive} onClick={this.props.handleSub}><SubIcon inactive={this.props.inactive}/></RoundBtn>
                    <Heading.h3 mx="20px" fontSize={24} >{this.props.qty}</Heading.h3>
                    <RoundBtn onClick={this.props.handleAdd} ><AddIcon/></RoundBtn>
                </Div>
            </Div>
        )
    }
}

export default PurchaseSection