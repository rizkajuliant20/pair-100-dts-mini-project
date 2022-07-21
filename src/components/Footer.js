import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
    return <Box sx = {{ mt: 10, display: 'flex', justifyContent: 'space-around'}}>
        <Box>
            <Typography>Audio and Subtitles</Typography>
            <Typography>Media Center</Typography>
            <Typography>Security</Typography>
            <Typography>Contact Us</Typography>
            <Button sx= {{ m: 2 }} variant='outlined'>Service Code</Button>
            <Typography>© 2022 Movies, All Right Reserved</Typography>
        </Box>
        <Box>
            <Typography>Audio Description</Typography>
            <Typography>Investor Relations</Typography>
            <Typography>Legal Provisions</Typography>
        </Box>
        <Box>
            <Typography>Help Center</Typography>
            <Typography>Jobs</Typography>
            <Typography>Cookie Preferences</Typography>
        </Box>
    </Box>
};

export default Footer;