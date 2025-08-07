import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GetDateApi,
  GetMathApi,
  GetTriviaApi,
  GetYearApi,
  GetNumberApi,
} from "../api/NumbersApi";

const Form = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!/^\d+$/.test(input)) {
      setError("Iltimos, faqat raqam kiriting!");
      return;
    }
    setError("");
    const data = await GetNumberApi(input);
    navigate("/result", { state: { data } });
  };

  const handleRandom = async (type) => {
    setError("");
    let data = null;

    if (type === "trivia") data = await GetTriviaApi();
    else if (type === "year") data = await GetYearApi();
    else if (type === "date") data = await GetDateApi();
    else if (type === "math") data = await GetMathApi();

    navigate("/result", { state: { data } });
  };

  return (
    <Box sx={{ margin: "30px 0px " }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Random Facts
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            background: "white",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            padding: "5px 10px",
          }}
        >
          <TextField
            fullWidth
            placeholder="Raqam kiriting"
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{ disableUnderline: true }}
            sx={{
              "& .MuiInputBase-input": {
                border: "none",
                outline: "none",
              },
            }}
          />
          <Button onClick={handleSend}>Send</Button>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px",
          }}
        >
          <Button
            sx={{ background: "blue", color: "white" }}
            onClick={() => handleRandom("trivia")}
          >
            Random Trivia
          </Button>
          <Button
            sx={{ background: "blue", color: "white" }}
            onClick={() => handleRandom("year")}
          >
            Random Year
          </Button>
          <Button
            sx={{ background: "blue", color: "white" }}
            onClick={() => handleRandom("date")}
          >
            Random Date
          </Button>
          <Button
            sx={{ background: "blue", color: "white" }}
            onClick={() => handleRandom("math")}
          >
            Random Math
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
