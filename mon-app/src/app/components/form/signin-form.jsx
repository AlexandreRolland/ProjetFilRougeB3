import {Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";


function SigninForm() {

    const [credentials, setCredentials] = useState({
        login: "",
        password: ""
    });

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value});
    }


    const margin= {margin: "20px auto"}
    const paperStyle = {padding: 20 , height: '60vh' , width: 280 , margin: "20px auto"}
    const avatarStyle = {backgroundColor: '#FFD568'}
    return(
<Grid>
    <Paper elevation={10 } style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
        <h2>Sign in</h2>
        </Grid>
        <TextField label="Email" placeholder="Rentrez votre Email" fullWidth required style={margin} value={credentials.login} onChange={onChange}/>
        <TextField label="Mot de passe" placeholder="Rentrez votre Mot de passe" fullWidth required  value={credentials.password} onChange={onChange}/>
        <Button type="submit" color="primary" variant="contained" fullWidth style={margin}>Se connecter</Button>
    </Paper>
</Grid>
    )
}

export default SigninForm;