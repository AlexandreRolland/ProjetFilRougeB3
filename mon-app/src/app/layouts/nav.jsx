import { Tabs, Typography, Tab, Button, AppBar, Toolbar, Container } from '@mui/material';
import '../assets/global.css';
import React from 'react';


const Nav = () => {
    const [value, setValue] = React.useState();
    return (
        <AppBar sx={{ background: "white" }}>
            <Container maxWidth="lg">

                <Toolbar className="test" style={{padding: "0"}} >
                    <Typography component="a" href="/" variant="h2" color="primary.dark">LOGO</Typography>
                    <Tabs

                        value={value}
                        onChange={(e, value) => setValue(value)}
                        indicatorColor="primary"
                        display="flex"
                        width="auto"
                        variant="fullWidth"
                        sx={{ flexGrow: 1, marginRight: 2, marginLeft: 2 }}
                    >
                        <Tab label="Home" href="/" />
                        <Tab label="Se faire conseiller" />
                        <Tab label="Discussions" />
                        <Tab label="Blog" />
                    </Tabs>
                    <Button variant="contained" href="/signin" >Se connecter</Button>
                    

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;