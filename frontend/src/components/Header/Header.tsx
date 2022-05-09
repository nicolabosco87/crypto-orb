import {
  Affix,
  Anchor,
  Button,
  CSSObject,
  Container,
  Group,
  Title,
} from "@mantine/core";
import {
  useWeb3Connect,
  useWeb3Disconnect,
  useWeb3Status,
} from "../../hooks/web3.hook";

import React from "react";
import { createStyles } from "@mantine/core";
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
  const { accounts } = useWeb3Status();
  const web3Connect = useWeb3Connect();
  const web3Disconnect = useWeb3Disconnect();

  const goToPonder = () => setPage("ponder");
  const goToAbout = () => setPage("about");

  const whiteStyle: CSSObject = { color: "white" };

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <Container
        fluid
        p={3}
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
            {!accounts && <Button onClick={web3Connect}>Connect Wallet</Button>}
            {accounts && (
              <Button onClick={web3Disconnect}>
                {accounts[0].slice(0, 4)}...{accounts[0].slice(-4)}
              </Button>
            )}
          </Group>
        </Group>
      </Container>
    </Affix>
  );
};
