import React, {FC, useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Divider, MenuItem, Select, TextField} from "@mui/material";
import {BloodTypeCounts, BloodTypes, canReceiveFrom} from "../types/BloodTypes";

interface WithdrawIcuProps {
    removeFromReserve: Function
    closeModal: Function
    setMsg: Function
}

const rows = [
    {bloodType: 'A+', quantity: 0},
    {bloodType: 'A-', quantity: 0},
    {bloodType: 'B+', quantity: 0},
    {bloodType: 'B-', quantity: 0},
    {bloodType: 'O+', quantity: 0},
    {bloodType: 'O-', quantity: 0},
    {bloodType: 'AB+', quantity: 0},
    {bloodType: 'AB-', quantity: 0},
];

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const WithdrawIcu: FC<WithdrawIcuProps> = ({removeFromReserve, closeModal, setMsg}) => {
    const [reserve, setReserve] = useState<{ bloodType: string, quantity: number }[]>([])
    const [patientBloodType, setType] = useState('')
    const [list, setList] = useState([] as BloodTypes[])
    useEffect(() => {
        if (patientBloodType) {
            setList(canReceiveFrom(patientBloodType as BloodTypes).filter((type) => {
                return reserve.some((item) => item.bloodType === type && item.quantity > 0)
            }))
        }

    }, [patientBloodType])
    const [quantities, setQuantities] = useState(
        {
            'A+': 0,
            'A-': 0,
            'B+': 0,
            'B-': 0,
            'O+': 0,
            'O-': 0,
            'AB+': 0,
            'AB-': 0
        } as BloodTypeCounts
    )
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = Number(e.target.value)
        const type = e.target.name
        const item = reserve.find((item) => item.bloodType === type)
        if (!item || item.quantity < val) {
            return;
        }
        setQuantities((prevState) => {
            return {...prevState, [type]: val};
        });
    }
    useEffect(
        () => {
            const reserveUnparsed = localStorage.getItem("reserve")

            if (reserveUnparsed) {
                const reserveParsed = JSON.parse(reserveUnparsed)
                setReserve(reserveParsed)
            } else {
                setReserve(rows)
            }
        }, [])
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <p>Select Blood Type</p>
                <Select
                    value={patientBloodType}
                    variant={"outlined"}
                    onChange={(e) => setType(e.target.value)}
                >
                    {bloodTypes.map(type => <MenuItem value={type}>{type}</MenuItem>)}
                </Select>
                <Divider/>
                {patientBloodType && <p>Select Quantities</p>}
                {patientBloodType &&
                    list.map((type) =>
                        reserve.find((item) => item.bloodType === type))
                        .map(item =>
                            <TextField
                                label={`${item!.bloodType} Available ${item!.quantity} pack(s)`}
                                type="number"
                                name={item!.bloodType}
                                InputProps={{
                                    inputProps: {min: 1, step: 1, max: item!.quantity}
                                }}
                                onChange={onChangeHandler}
                                value={item!.bloodType in quantities ? quantities[item!.bloodType as keyof BloodTypeCounts] : 0}
                            />
                        )}
                {patientBloodType && list.length === 0 &&
                    <div style={{color: "red"}}>No available packs in reserve!</div>}

            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "right"}}>
                {patientBloodType && list.length !== 0 && <Button size="medium" variant={"contained"} onClick={(e) => {
                    removeFromReserve(quantities)
                    closeModal()
                    setMsg('Withdrew successfully')
                }

                }>Take</Button>}
            </CardActions>
        </Card>
    );

};

export default WithdrawIcu;