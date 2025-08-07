import { Box, Typography, Container, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.data) return <Typography>Ma’lumot topilmadi</Typography>;

  const { text, number, type } = state.data;

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Natija
        </Typography>
        <Typography variant="h6">Raqam: {number || "Noma'lum"}</Typography>
        {type && <Typography>Tur: {type}</Typography>}
        <Typography mt={2} variant="body1">
          🧠 {text}
        </Typography>

        <Button variant="outlined" sx={{ mt: 3 }} onClick={() => navigate("/")}>
          Orqaga
        </Button>
      </Box>
    </Container>
  );
};

export default Result;
