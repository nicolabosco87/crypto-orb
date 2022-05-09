import { Anchor, Box } from "@mantine/core";

import React from "react";
import { setPage } from "../store/actions";

export const Footer = () => {
  const onClick = () => setPage("privacy");

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1,
      }}
    >
      <Anchor onClick={onClick} sx={{ color: "white" }}>
        Privacy
      </Anchor>
    </Box>
  );
};
