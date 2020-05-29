import React from "react";
import {Div} from "../elements/divs/Div";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import Heading from "../elements/text/StyledHeading";
import {AddIcon} from "./Icons/AddIcon";
import {SubIcon} from "./Icons/SubIcon";

const PurchaseSection = (props) => {
    return (
        <Div display={"flex"} width={0.95} mx={"auto"} justifyContent={"space-between"} color={props.inactive ? "#616567" : "vyBlack"}>
            <Heading.h2 >{props.type}</Heading.h2>
            <Div display="flex"  alignItems="center">
                <RoundBtn inactive={props.inactive} onClick={props.handleSub} ><SubIcon inactive={props.inactive}/></RoundBtn>
                <Heading.h3 mx={20}  fontSize={24} >{props.qty}</Heading.h3>
                <RoundBtn onClick={props.handleAdd} ><AddIcon/></RoundBtn>
            </Div>
        </Div>
    )
}

export default PurchaseSection