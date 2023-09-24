
import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '30vh',
            backgroundColor: "#3D1766",
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1,
                        mt: 10
                    }}>
                        <Typography color="white" variant="h5">
                            BookStore App
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}>
                        <Typography color="white" indicatorColor="secondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Express | MongoDB | Node.Js | Material UI`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default Footer;
