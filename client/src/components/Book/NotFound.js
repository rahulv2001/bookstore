import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <Box marginTop={'10px'} display="flex" flexDirection="column" alignItems="center">
                <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
                    No Book is Present in the Stock.
                </Typography>
            </Box>
        </div>
    )
}

export default NotFound