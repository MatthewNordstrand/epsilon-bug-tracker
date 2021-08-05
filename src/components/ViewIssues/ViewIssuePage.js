import React from "react";
import { useParams } from "react-router";

export default function ViewIssuePage(props) {
    let { issueID } = useParams();

    return(
        <div>Hello world. Issue ID: {issueID}</div>
    );
}