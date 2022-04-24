import { Box } from "@mantine/core";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1,
      }}
    >
      <a
        href="https://www.iubenda.com/privacy-policy/26028820"
        className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe "
        title="Privacy Policy "
      >
        Privacy Policy
      </a>
    </Box>
  );
};
