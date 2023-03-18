import React, {FC, useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Divider, TextField} from "@mui/material";

interface EmergencyWithdraw {
    removeFromReserve: Function
    closeModal: Function
    setMsg: Function
}


const EmergencyWithdraw: FC<EmergencyWithdraw> = ({removeFromReserve, closeModal, setMsg}) => {
    const [reserve_O_Minus, setReserve_O_Minus] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = Number(e.target.value)
        if (reserve_O_Minus < val) {
            return;
        }
        setQuantity(val);
    }
    useEffect(
        () => {
            const reserveUnparsed = localStorage.getItem("reserve")

            if (reserveUnparsed) {
                const reserveParsed = JSON.parse(reserveUnparsed) as { bloodType: string, quantity: number }[]
                const item = reserveParsed.find(item => item.bloodType === 'O-')
                setReserve_O_Minus(item!.quantity)
            }
        }, [])
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <p>O- Blood Type</p>
                <Divider/>
                {reserve_O_Minus &&
                    <>
                        <p>Select Quantities</p>
                        <TextField
                            label={`O- Available ${reserve_O_Minus} pack(s)`}
                            type="number"
                            InputProps={{
                                inputProps: {min: 1, step: 1, max: reserve_O_Minus}
                            }}
                            onChange={onChangeHandler}
                            value={quantity}
                        />
                    </>}
                {reserve_O_Minus === 0 &&
                    <div style={{color: "red"}}>No available packs in reserve!</div>}

            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "right"}}>
                {reserve_O_Minus !== 0 &&
                    <Button size="medium" variant={"contained"} onClick={(e) => {
                        removeFromReserve({'O-': quantity})
                        closeModal()
                        setMsg('Withdrew successfully')
                    }

                    }>Take</Button>}
            </CardActions>
        </Card>
    );

};

export default EmergencyWithdraw;