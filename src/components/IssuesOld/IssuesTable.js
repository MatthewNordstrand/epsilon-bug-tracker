import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class IssuesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table responsive striped hover bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Issue</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Opened On</th>
                        <th>Opened By</th>
                        <th>Assignee</th>
                        <th>Date Resolved</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Test Issue</td>
                        <td className="pr-high">HIGH</td>
                        <td className="st-progress">In Progress</td>
                        <td>2021-07-20</td>
                        <td>Matt Nordstrand</td>
                        <td>Matt Nordstrand</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}