import React, {FC, useState} from 'react';
import {Alert, Box, Button, MenuItem, MenuList, Modal, Snackbar} from "@mui/material";
import DonateBlood from "./DonateBlood";
import CloseIcon from '@mui/icons-material/Close';
import WithdrawIcu from "./WithdrawICU";
import EmergencyWithdraw from "./EmergencyWithdraw";

const components = [
    DonateBlood, WithdrawIcu, null
]

interface MenuProps {
    addToReserve: Function
    removeFromReserve: Function

}

const Menu: FC<MenuProps> = ({removeFromReserve, addToReserve}) => {
    const [isOpen, setOpen] = useState(false)
    const [selectedComponent, setComponent] = useState<'donateBlood' | 'withdrawICU' | 'withdrawEmergency'>('donateBlood')
    const [msg,setMsg] = useState('')
    return (

        <MenuList
        >
            { msg &&
            <Snackbar
                open={true}
                autoHideDuration={2000}
                onClose={()=>setMsg('')}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <Alert severity='success' onClose={()=>setMsg('')}>
                    {msg}
                </Alert>
            </Snackbar>}
            <MenuItem onClick={() => {
                setOpen(true)
                setComponent('donateBlood')
            }}>Add donation</MenuItem>
            <MenuItem onClick={() => {
                setOpen(true)
                setComponent('withdrawICU')
            }}>Withdraw for ICU</MenuItem>
            <MenuItem onClick={() => {
                setOpen(true)
                setComponent('withdrawEmergency')
            }}>Withdraw for Emergency</MenuItem>
            <Modal
                open={isOpen}
                onClose={() => setOpen(false)}
            >
                <Box sx={{
                    width: 400, height: 200,
                    margin: "50px auto",
                }}>
                    <>
                        <Button sx={{marginBottom: 1, float: "right"}}
                                variant={"text"}
                                color={"secondary"}
                                onClick={() => setOpen(false)}
                        ><CloseIcon/></Button>
                        {
                            selectedComponent === 'donateBlood' ?
                                <DonateBlood updateReserve={addToReserve} setMsg = {setMsg}/> :
                                selectedComponent === 'withdrawEmergency' ?
                                    <EmergencyWithdraw removeFromReserve={removeFromReserve}
                                                       closeModal={() => setOpen(false)}
                                                           setMsg={setMsg}

                                    /> :
                                    <WithdrawIcu removeFromReserve={removeFromReserve}
                                                 closeModal={() => setOpen(false)}
                            setMsg = {setMsg}
                            />
                        }
                    </>
                </Box>
            </Modal>
        </MenuList>
    );
};

export default Menu;