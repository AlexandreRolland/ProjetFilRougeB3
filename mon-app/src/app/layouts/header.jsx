import { Grid, Tabs, Typography, Tab, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/global.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Header = () => {
    return (
        <header>
      <>
            <Grid container>
            <Grid item xs={2}>
                <h1 className="logo">LOGO</h1>
            </Grid>
            <Grid item xs={6}>
            <Tabs>
                <Link to="/"><Tab label="Home" /></Link>
                <Tab label="About" />
                <Tab label="Contact" />
            </Tabs>
            </Grid>
            <Grid item xs={3}>
            <Link to="/signin"><Button variant="contained"  >Se connecter</Button></Link>
            </Grid>
            <Grid item xs={1} sx={'textAlign:right;'} >
            <Link to="/signin"><Typography><AccountCircleOutlinedIcon/></Typography></Link>
            </Grid>
            </Grid>
        </>
        </header>
    );
    };

export default Header;