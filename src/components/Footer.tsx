import { Stack } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "300px",
        background: `linear-gradient(
      to top,
      #33fca7 0%,
      #5efcb7 25%,
      #9efcd4 50%,
      #ccfce9 75%,
      #ffffff 100%
    )`,
      }}
    >
      <Stack
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: 4,
        }}
      >
        <h1>Footer</h1>
      </Stack>
    </Stack>
  );
};

export default Footer;
