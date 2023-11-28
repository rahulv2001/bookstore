import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#3D1766", py: 1 }} position="sticky">
                <Toolbar>
                    <NavLink to='/' style={{ color: 'white' }}>
                        <Typography sx={{ display: "flex" }}>
                            <LibraryBooksOutlinedIcon />
                            <Typography sx={{ ml: "1rem", textDecoration: 'none' }}><b style={{textDecoration:"none"}}>BookStore App</b></Typography>
                        </Typography>
                    </NavLink>
                    <Tabs sx={{ ml: 'auto' }} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to='/books' label='ALL Books' index={0} />
                        <Tab LinkComponent={NavLink} to='/add' label='Add Books' index={1} />
                        <Tab LinkComponent={NavLink} to='/about' label='About US' index={2} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
