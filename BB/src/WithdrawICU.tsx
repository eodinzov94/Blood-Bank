import React, {FC, useState} from 'react';
import {Button, Card, CardActions, CardContent, Divider, MenuItem, Select, TextField} from "@mui/material";
import {BloodTypes, canReceiveFrom} from "./BloodTypes";

interface WithdrawIcuProps {
    updateReserve: Function
}

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const WithdrawIcu:FC<WithdrawIcuProps> = ({updateReserve}) => {

    const [patientBloodType, setType] = useState('')
    const [quantity, setQuantity] = useState(1)
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display:"flex",flexDirection:"column", gap:2}}>
                <p>Select Blood Type</p>
                    <Select
                        value={patientBloodType}
                        variant={"outlined"}
                        onChange={(e) => setType(e.target.value)}
                    >
                        {bloodTypes.map(type => <MenuItem value={type}>{type}</MenuItem>)}
                    </Select>
                    <Divider />
                {patientBloodType &&  <p>Select Quantities</p>}
                {patientBloodType &&
                    canReceiveFrom(patientBloodType as BloodTypes).map( type =>
                    <TextField
                        label={type}
                        type="number"
                        InputProps={{
                            inputProps: { min: 1,step:1 }
                        }}
                    />
                )}



            </CardContent>
            <CardActions sx={{display:"flex",justifyContent:"right"}}>
                <Button  size="medium" variant={"contained"}>Take</Button>
            </CardActions>
        </Card>
    );

};

export default WithdrawIcu;