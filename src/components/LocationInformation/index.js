import { Stack, Paper, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

import React from "react";

const LocationInformation = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null ? twitter_username : "Not available"}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== null ? blog : "Not available"}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null ? company : "Not available"}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
