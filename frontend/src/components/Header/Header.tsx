import {
  Affix,
  Anchor,
  CSSObject,
  Container,
  Group,
  Title,
  createStyles,
} from "@mantine/core";

import React from "react";
import { setPage } from "../../store/actions";
import { store } from "../../store/store";
import { useSnapshot } from "valtio";

const useStyles = createStyles((theme, _params, getRef) => ({
  logo: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "1.5rem",
    },
  },
}));

export const Header = () => {
  const { currentPage } = useSnapshot(store);
  const { classes } = useStyles();

  const goToPonder = () => setPage("ponder");
  const goToAbout = () => setPage("about");

  const whiteStyle: CSSObject = { color: "white" };

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <Container
        fluid
        px={15}
        py={3}
        m={0}
        sx={(theme) => ({
          width: "100vw",
          background: theme.colors.dark[7],
          opacity: 0.9,
        })}
      >
        <Group position="apart" style={{ gap: 2 }}>
          <Title className={classes.logo} order={1}>
            Crypto Orb
          </Title>

          <Group position="right">
            <Anchor
              onClick={goToPonder}
              sx={currentPage === "ponder" ? whiteStyle : undefined}
            >
              Ponder Orb
            </Anchor>
            <Anchor
              onClick={goToAbout}
              sx={currentPage === "about" ? whiteStyle : undefined}
            >
              About
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Affix>
  );
};
