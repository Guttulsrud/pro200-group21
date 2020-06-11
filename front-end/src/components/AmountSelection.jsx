import React from "react";
import {Div} from "../elements/divs/Div";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import Heading from "../elements/text/StyledHeading";
import {AddIcon} from "./Icons/AddIcon";
import {SubIcon} from "./Icons/SubIcon";

const AmountSelection = (props) => {
    return (
        <Div display={"flex"} width={0.90} mx={"auto"} justifyContent={"space-between"}
             color={props.inactive ? "#616567" : "vyBlack"}>
            <Heading.h2>{props.type}</Heading.h2>
            <Div display="flex" alignItems="center">
                <RoundBtn inactive={props.inactive} onClick={props.handleSub}><SubIcon
                    inactive={props.inactive}/></RoundBtn>
                <Heading.h3 mx={15} fontSize={24} textAlign="center" minWidth={"28px"}>{props.qty}</Heading.h3>
                <RoundBtn onClick={props.handleAdd}><AddIcon/></RoundBtn>
            </Div>
        </Div>
    )
}

export default AmountSelection