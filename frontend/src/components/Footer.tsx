import { Anchor, Box, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { PlugConnected, PlugConnectedX } from "tabler-icons-react";

import React from "react";
import { setPage } from "../store/actions";
import { useWeb3Status } from "../hooks/web3.hook";

export const Footer = () => {
  const { isConnected } = useWeb3Status();
  const onClick = () => setPage("privacy");
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 10,
        left: 10,
        zIndex: 1,
      }}
    >
      {isConnected ? (
        <>
          <PlugConnected color={theme.colors.green[5]} />
          <Text size="xs">Connected</Text>
        </>
      ) : (
        <>
          <PlugConnectedX color={theme.colors.gray[5]} />
          <Text size="xs" color="gray">
            Not Connected
          </Text>
        </>
      )}
    </Box>
  );
};
