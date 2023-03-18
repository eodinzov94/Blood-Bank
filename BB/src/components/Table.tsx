import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Paper, Table, TableBody, TableContainer, TableHead, Typography} from "@mui/material";
import {FC} from "react";



function Row(props: { row: { bloodType:string,quantity:number } }) {
    const {row} = props;

    return (
        <>
        <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"

                >

                </IconButton>
            </TableCell>
            <TableCell align="right">{row.bloodType}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>

            </TableCell>
        </TableRow>
        </>
    );
}
interface MyTableProps {
    data : { bloodType:string,quantity:number }[]
}

const MyTable:FC<MyTableProps> = ({data}) =>{
    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" >
                <b>Blood reserves</b>
            </Typography>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left">Blood Type</TableCell>
                        <TableCell align="left">Quantity (0.5L per unit)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <Row  row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default MyTable