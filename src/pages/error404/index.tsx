import Footer from '@Components/Footer';
import { Box, Button, Container, Stack } from '@mui/material';
import { CaretRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import error404Img from '../../assets/404error.png';

function Error404Page() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Stack
          direction="row"
          minHeight={'65dvh'}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Box>
            <img src={error404Img} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={8}
          >
            <h1>PAGE NOT FOUND!</h1>
            <p>Return to the home page.</p>
            <Button
              variant="contained"
              endIcon={<CaretRight size={16} />}
              onClick={() => navigate('/')}
            >
              HOME
            </Button>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
}

export default Error404Page;
