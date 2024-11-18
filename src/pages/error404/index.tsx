import Footer from "@Components/Footer";
import Navbar from "@Components/Navbar";
import { Box, Button, Container, Stack } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
function Error404Page() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Container>
        <Stack
          direction="row"
          minHeight={"65dvh"}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Box>
            <img src="/src/assets/404error.png" />
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
              onClick={() => navigate("/")}
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
