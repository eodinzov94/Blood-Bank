import React, {FC, useState} from 'react';
import {Box, Button, MenuItem, MenuList, Modal} from "@mui/material";
import DonateBlood from "./DonateBlood";
import CloseIcon from '@mui/icons-material/Close';
import WithdrawIcu from "./WithdrawICU";

const components = [
    DonateBlood, WithdrawIcu, null
]
interface MenuProps{
    updateReserve: Function

}
const Menu:FC<MenuProps> = ({updateReserve}) => {
    const [isOpen, setOpen] = useState(false)
    const [selectedComponent, setComponent] = useState<'donateBlood' | 'withdrawICU' | 'withdrawEmergency'>('donateBlood')
    return (

        <MenuList
        >
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
                        <Button sx={{marginBottom:1,float:"right"}}
                                variant={"text"}
                                color={"secondary"}
                                onClick={() => setOpen(false)}
                        ><CloseIcon/></Button>
                        {
                            selectedComponent === 'donateBlood' ?
                            <DonateBlood updateReserve={updateReserve}/> :
                            selectedComponent === 'withdrawEmergency' ?
                            <div>EMERGENCY</div> :
                            <WithdrawIcu updateReserve={updateReserve}/>
                        }
                    </>


                </Box>
            </Modal>
        </MenuList>
    );
};

export default Menu;