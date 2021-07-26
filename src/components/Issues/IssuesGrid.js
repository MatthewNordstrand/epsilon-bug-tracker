import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue } from 'chalk';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(2),
    },
    table: {
        width: '100%',
    },
}));

export default function IssuesGrid(props) {
    const classes = useStyles();

    function testFunction({id, issueName, openedBy}) {
        alert(`You clicked on issue ${id}: ${issueName}, which was opened by ${openedBy}`);
    }

    const rows = [
        {id: 1, issueName: 'Test Issue', priority: 'HIGH', status: 'In Progress', openedOn: '2021-07-20', openedBy: 'Matt Nordstrand', assignee: 'Matt Nordstrand', dateResolved: ''},
        {id: 2, issueName: 'Ooga Booga', priority: 'LOW', status: 'New', openedOn: '2021-07-20', openedBy: 'Matt Nordstrand', assignee: '', dateResolved: ''},
        {id: 3, issueName: 'This is cool', priority: 'HIGH', status: 'In Progress', openedOn: '2021-07-20', openedBy: 'Matt Nordstrand', assignee: 'Matt Nordstrand', dateResolved: ''},
        {id: 4, issueName: 'Test Issue', priority: 'HIGH', status: 'In Progress', openedOn: '2021-07-20', openedBy: 'Matt Nordstrand', assignee: 'Matt Nordstrand', dateResolved: ''},
    ];

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell>Issue</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Opened On</TableCell>
                        <TableCell>Opened By</TableCell>
                        <TableCell>Assignee</TableCell>
                        <TableCell>Date Resolved</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow onClick={() => testFunction(row)} hover key={row.id}>
                            <TableCell align="right" component="th" scope="row">{row.id}</TableCell>
                            <TableCell>{row.issueName}</TableCell>
                            <TableCell>{row.priority}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.openedOn}</TableCell>
                            <TableCell>{row.openedBy}</TableCell>
                            <TableCell>{row.assignee}</TableCell>
                            <TableCell>{row.dateResolved}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
