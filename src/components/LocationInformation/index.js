import { Stack, Paper, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

import React from "react";

const LocationInformation = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitter_username !== null ? twitter_username : "Not available"}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          <Typography>{blog !== null ? blog : "Not available"}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>
            {company !== null ? company : "Not available"}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
