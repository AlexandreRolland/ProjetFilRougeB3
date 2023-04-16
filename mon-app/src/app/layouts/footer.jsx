import {Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";

const Footer = () => {

    return (


                <Container maxWidth="lg" backgroundColor="white" style={{padding: '0'}}>

                    <Toolbar style={{padding: '0'}} >
                        <Typography component="a" href="/" variant="h2" >LOGO</Typography>
                        <Tabs
                            indicatorColor="primary"
                            display="flex"
                            width="auto"
                            variant="fullWidth"
                            sx={{ flexGrow: 1, marginRight: 2, marginLeft: 2 }}
                        >
                            <Tab label="Accueil" href="/" />
                            <Tab label="Se faire conseiller" />
                            <Tab label="Discussions" />
                            <Tab label="Blog" />
                        </Tabs>
                        <Typography variant="contained" href="/signin" >© 2023 xxxxxxx | Rolland Alexandre</Typography>

                    </Toolbar>
                </Container>

    );
};

export default Footer;