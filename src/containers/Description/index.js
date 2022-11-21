import React from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../../components/PaperInformation/index";

export const Description = ({ userState }) => {
  const { bio } = userState;
  return (
    <>
      <Stack>
        <Typography>
          {bio !== null
            ? bio
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae ad officiis reiciendis eaque, explicabo delectus aspernatur ipsum veniam aut?"}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      {/* <LocationInformation/> */}
    </>
  );
};
