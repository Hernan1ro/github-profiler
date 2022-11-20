import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Searcher = ({ inputUser, setInputUser }) => {
  const handleSubmit = () => {};

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Github User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
