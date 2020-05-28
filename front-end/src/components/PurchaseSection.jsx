import React from "react";
import {Div} from "../elements/divs/Div";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import Heading from "../elements/text/StyledHeading";
import {AddIcon} from "./Icons/AddIcon";
import {SubIcon} from "./Icons/SubIcon";

const PurchaseSection = (props) => {
    return (
        <Div display={"flex"} width={0.95} mx={"auto"} justifyContent={"space-between"} color={props.inactive ? "#616567" : "vyBlack"}>
            <Heading.h2 fontSize={22} my={13}>{props.type}</Heading.h2>
            <Div display="flex"  alignItems="center" height={"fit-content"}>
                <RoundBtn inactive={props.inactive} onClick={props.handleSub} ><SubIcon inactive={props.inactive}/></RoundBtn>
                <Heading.h3 mx={22} my={13} fontSize={20} >{props.qty}</Heading.h3>
                <RoundBtn onClick={props.handleAdd} ><AddIcon/></RoundBtn>
            </Div>
        </Div>
    )
}

export default PurchaseSection