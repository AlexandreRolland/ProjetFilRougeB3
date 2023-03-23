import {Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { AuthServices } from "../../services/auth.service";
import { TokenServices } from "../../services/token.services";



function SigninForm() {



    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await AuthServices.signIn(credentials)
        
        TokenServices.setToken(token.access_token);
        
        

        console.log(credentials);

    }


    const margin= {margin: "20px auto"}
    const paperStyle = {padding: 20 , height: '60vh' , width: 280 , margin: "20px auto"}
    return(
<Grid>
    <Paper elevation={10 } style={paperStyle}>
        <Grid align="center">
        <Avatar sx={{
            bgcolor: 'primary.main',
        }}><LockOutlinedIcon /></Avatar>
        <h2>Sign in</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email"placeholder="Rentrez votre Email" fullWidth required style={margin} value={credentials.email} onChange={handleChange}/>
        <TextField label="Mot de passe" name="password" placeholder="Rentrez votre Mot de passe" type="password" fullWidth required value={credentials.password} onChange={handleChange} />
        <Button type="submit" color="primary" variant="contained" fullWidth>Se connecter</Button>
        </form>
    </Paper>
</Grid>
    )
}

export default SigninForm;