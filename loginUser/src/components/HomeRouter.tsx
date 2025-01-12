import { Box, Typography } from "@mui/material";

const HomeRouter = () => {

    return(
        <Box 
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            textAlign: 'center', 
          }}
        >
          <Typography variant="h4">Home</Typography>
        </Box>
      );
}

export default HomeRouter