import { Group, Paper, Text, Title } from "@mantine/core";

import React from "react";

export const Privacy = () => {
  return (
    <Group position="center" mt={50} sx={{ position: "relative", zIndex: 100 }}>
      <Paper shadow="sm" p="lg" sx={{ opacity: 0.9 }}>
        <Title order={3} mb={20}>
          Privacy
        </Title>
        <Text mb={15}>
          <script
            id="CookieDeclaration"
            src="https://consent.cookiebot.com/7b238e1b-4be8-4f40-8c99-039e4048a174/cd.js"
            type="text/javascript"
            async
          ></script>
        </Text>
      </Paper>
    </Group>
  );
};
