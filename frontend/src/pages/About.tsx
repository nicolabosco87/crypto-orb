import { Anchor, Group, Paper, Text, ThemeIcon, Title } from "@mantine/core";

import { BrandGithub } from "tabler-icons-react";

export const About = () => {
  return (
    <Group position="center" mt={50} sx={{ position: "relative", zIndex: 100 }}>
      <Paper shadow="sm" p="lg" sx={{ opacity: 0.9 }}>
        <Title order={3} mb={20}>
          About
        </Title>
        <Text mb={15}>
          Ponder the Orb to see predictions on Cryptos, computed directly
          through Smart Contract!
        </Text>
        <Text mb={30}>
          Well, the Orb can be wrong! So{" "}
          <u>THIS WEBSITE DOESN'T GIVE FINANCIAL ADVICES!</u>
        </Text>
        <Text>
          Ponder also the GitHub repository!
          <Anchor
            href="https://github.com/nicolabosco87/crypto-orb"
            target="_blank"
            ml={15}
          >
            <ThemeIcon>
              <BrandGithub />
            </ThemeIcon>
          </Anchor>
        </Text>
      </Paper>
    </Group>
  );
};
