import { Box, Typography } from "@mui/material";

const About = () => {

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
          <Typography variant="h4">About</Typography>
        </Box>
      );
}

export default About;