import React, {FC, useState} from 'react';
import {Button, Card, CardActions, CardContent, MenuItem, Select, TextField} from "@mui/material";

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

interface DonateBloodProps {
    updateReserve: Function
    setMsg: Function
}


const DonateBlood:FC<DonateBloodProps> = ({updateReserve,setMsg}) => {
    const [selectedType, setType] = useState('A+')
    const [id, setId] = useState('')
    const donateHandler = () => {
        updateReserve({bloodType:selectedType,quantity:1})
        setMsg('Added blood pack successfully')
    }
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display:"flex",flexDirection:"row", gap:3}}>

                <Select

                    value={selectedType}
                    label="Blood Type"
                    variant={"outlined"}
                    onChange={(e) => setType(e.target.value)}
                >
                    {bloodTypes.map(type => <MenuItem value={type}>{type}</MenuItem>)}
                </Select>

                <TextField
                    id="outlined-number"
                    label="ID"
                    type="text"
                    value = {id}
                    onChange={(e)=>setId(e.target.value)}
                />
            </CardContent>
            <CardActions sx={{display:"flex",justifyContent:"right"}}>
                <Button  size="medium" variant={"contained"} onClick={donateHandler}>Add</Button>
            </CardActions>
        </Card>
    );
};

export default DonateBlood;