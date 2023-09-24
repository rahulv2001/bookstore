import { Box, Typography } from "@mui/material";
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React from "react";

const About = () => {
  return (
    <div>
      <Box marginTop={'10px'} display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy", mb:"30%" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;