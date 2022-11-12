import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ButtonToCalc from './ButtonToCalc';
import { Alert } from '@mui/material';

function appBarLabel() {
    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <CalculateIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                battle v2 - Let's goooo
            </Typography>
        </Toolbar>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export const Home = () => {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    {appBarLabel()}
                </AppBar>

            </ThemeProvider>
            <ButtonToCalc url='/hotel.jpeg' title='Squares and roots'
                width='80%' path='/calcSuite/squares' />
            <ButtonToCalc url='/hotel.jpeg' title='Addition and subtract'
                width='80%' path='/calcSuite/addition' />
            <div style={{
                marginTop: "340px",
                padding: "10px"
            }}>
                <Alert severity="info">You need to do some calcs in the next 30 days!</Alert>
            </div>
        </div>
    )
}