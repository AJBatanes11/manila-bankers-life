import Slider from 'react-slick';
import './App.css';
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const serviceList = [ "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8", "Service 9", "Service 10" ];

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
}
function App() {
  return (
    <Container>
      <Typography variant='h1' sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>
        Hello World!
      </Typography>

      <Typography variant='h2' sx={{ my: 4 }}>Featured Products</Typography>

{/* SAMPLE CARD CAROUSEL  */}

      <Slider {...settings}>
        {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'space-between', gap: 4 }}>   */}
        {serviceList.map((service, index) => (
            <Paper elevation={3} sx={{ p: 2}}>
              <Typography variant='h3'>{service}</Typography>
              <Typography sx={{ my: 1}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Paper>
        ))}
      </Slider>

    </Container>
  );
}

export default App;
