import {
  Affix,
  Anchor,
  Button,
  CSSObject,
  Container,
  Group,
  Title,
} from "@mantine/core";

import React from "react";
import { setPage } from "../../store/actions";
import { store } from "../../store/store";
import { useInitWeb3 } from "../../hooks/Web3Modal.hook";
import { useSnapshot } from "valtio";

export const Header = () => {
  const { currentPage, web3 } = useSnapshot(store);

  const account = web3?.account;

  const goToPonder = () => setPage("ponder");
  const goToAbout = () => setPage("about");

  const { connectModal, logoutOfWeb3Modal } = useInitWeb3();

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
        <Group position="apart">
          <Title order={1}>Crypto Orb</Title>

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
            {!account && <Button onClick={connectModal}>Connect Wallet</Button>}
            {account && (
              <Button onClick={logoutOfWeb3Modal}>
                {account.slice(0, 4)}...{account.slice(-4)}
              </Button>
            )}
          </Group>
        </Group>
      </Container>
    </Affix>
  );
};
