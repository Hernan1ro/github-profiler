import React from "react";
import { CardMedia, Grid } from "@mui/material";

export const UserCard = ({ userState }) => {
  const { avatar_url } = userState;
  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia component="img" alt="GitHub User" image={avatar_url} />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};
