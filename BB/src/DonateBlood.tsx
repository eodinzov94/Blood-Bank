import React, {FC, useState} from 'react';
import {Button, Card, CardActions, CardContent, MenuItem, Select, TextField} from "@mui/material";

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

interface DonateBloodProps {
    updateReserve: Function
}


const DonateBlood:FC<DonateBloodProps> = ({updateReserve}) => {
    const [selectedType, setType] = useState('A+')
    const [quantity, setQuantity] = useState(1)
    const donateHandler = () => {
        updateReserve({bloodType:selectedType,quantity})
    }
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display:"flex",flexDirection:"row", gap:3}}>
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    value = {quantity}
                    onChange={(e)=>setQuantity(Number(e.target.value))}
                    InputProps={{
                        inputProps: { min: 1,step:1 }
                    }}

                />
                <Select

                    value={selectedType}
                    label="Blood Type"
                    variant={"outlined"}
                    onChange={(e) => setType(e.target.value)}
                >
                    {bloodTypes.map(type => <MenuItem value={type}>{type}</MenuItem>)}
                </Select>
            </CardContent>
            <CardActions sx={{display:"flex",justifyContent:"right"}}>
                <Button  size="medium" variant={"contained"} onClick={donateHandler}>Add</Button>
            </CardActions>
        </Card>
    );
};

export default DonateBlood;