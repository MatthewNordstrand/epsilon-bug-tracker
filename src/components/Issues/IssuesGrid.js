import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(2),
    },
    table: {
        width: '100%',
    },
    headRow: {
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function IssuesGrid(props) {
    const classes = useStyles();

    function gotoViewIssue(id) {
        
    }

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.headRow}>
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
                    {props.issues.map((row) => (
                        <TableRow onClick={() => gotoViewIssue(row.id)} hover key={row.id}>
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
