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
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/7b238e1b-4be8-4f40-8c99-039e4048a174/cd.js"
        type="text/javascript"
        async
      ></script>
    </Box>
  );
};
