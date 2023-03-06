import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import CollapsibleTable from "./Table";
export default function MainPage() {

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar >
                    <IconButton
                        color="inherit"
                        edge="start"
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        <AccountBalanceTwoToneIcon/> Blood Bank <BloodtypeIcon/>
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Button sx={{color: '#fff'}}>
                            Test Button
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
                <CollapsibleTable/>
            </Box>
        </Box>
    );
}