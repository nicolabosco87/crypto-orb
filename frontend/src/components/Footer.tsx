import { Alert, Box, MediaQuery, Text, useMantineTheme } from "@mantine/core";
import {
  IconAlertCircle,
  IconPlugConnected,
  IconPlugConnectedX,
} from "@tabler/icons";

import { useWeb3Status } from "../hooks/web3.hook";

export const Footer = () => {
  const { isConnected } = useWeb3Status();
  const theme = useMantineTheme();

  return (
    <>
      <Alert
        icon={<IconAlertCircle size={16} />}
        color="dark"
        sx={{
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Text size="sm">THIS WEBSITE DOESN'T GIVE FINANCIAL ADVICES!</Text>
      </Alert>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
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
              <IconPlugConnected color={theme.colors.green[5]} />
              <Text size="xs">Connected</Text>
            </>
          ) : (
            <>
              <IconPlugConnectedX color={theme.colors.gray[5]} />
              <Text size="xs" color="gray">
                Not Connected
              </Text>
            </>
          )}
        </Box>
      </MediaQuery>
    </>
  );
};
