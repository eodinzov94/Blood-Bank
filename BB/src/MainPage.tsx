import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import CollapsibleTable from "./Table";
import Menu from "./Menu";
import {useEffect, useState} from "react";
import MyTable from "./Table";


const rows = [
    {bloodType:'A+',quantity:0},
    {bloodType:'A-',quantity:0},
    {bloodType:'B+',quantity:0},
    {bloodType:'B-',quantity:0},
    {bloodType:'O+',quantity:0},
    {bloodType:'O-',quantity:0},
    {bloodType:'AB+',quantity:0},
    {bloodType:'AB-',quantity:0},
];


export default function MainPage() {
    const [reserve,setReserve] = useState<{bloodType:string,quantity:number}[]>([])
    const updateReserve = (newPack:{bloodType:string,quantity:number}) => {
        const tempList = reserve.map(pack => pack.bloodType === newPack.bloodType ?
            {bloodType:pack.bloodType,quantity:pack.quantity + newPack.quantity} : pack)
        setReserve(tempList)
        localStorage.setItem("reserve", JSON.stringify(tempList))
    }
    useEffect(
        ()=>{
            const reserveUnparsed = localStorage.getItem("reserve")

            if (reserveUnparsed){
                const reserveParsed = JSON.parse(reserveUnparsed)
                setReserve(reserveParsed)
            }
            else{
                setReserve(rows)
            }
        },[])
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar >

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'block', sm: 'block'}}}
                    >
                        <AccountBalanceTwoToneIcon/> Blood Bank <BloodtypeIcon/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{p: 3,display:"flex",flexDirection:"row"}}>
                <Menu updateReserve={updateReserve}/>
                <Toolbar/>
                <MyTable  data={reserve}  updateReserve={updateReserve}/>
            </Box>
        </Box>
    );
}