import { Box, Button, Container, Typography } from "@mui/material";

const Footer = () => {
    return <Container bgcolor="primary" color="white" sx = {{ borderTop: 1, py: 5, mt: 10, display: 'flex', justifyContent: 'space-around'}}>
        <Box sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Button href="#" color="inherit" variant="text">Audio and Subtitles</Button>
            <Button href="#" color="inherit" variant="text">Media Center</Button>
            <Button href="#" color="inherit" variant="text">Security</Button>
            <Button href="#" color="inherit" variant="text">Contact Us</Button>
            <Button color="inherit" sx= {{ my: 2 }} variant='outlined'>Service Code</Button>
            <Typography color="inherit">© 2022 Movies, All Right Reserved</Typography>
        </Box>
        <Box sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Button href="#" color="inherit" variant="text">Audio Description</Button>
            <Button href="#" color="inherit" variant="text">Investor Relations</Button>
            <Button href="#" color="inherit" variant="text">Legal Provisions</Button>
        </Box>
        <Box sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Button href="#" color="inherit" variant="text">Help Center</Button>
            <Button href="#" color="inherit" variant="text">Jobs</Button>
            <Button href="#" color="inherit" variant="text">Cookie Preferences</Button>
        </Box>
    </Container>
};

export default Footer;