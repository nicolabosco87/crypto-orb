import { AppShell, MantineProvider } from "@mantine/core";

import Layout from "./components/Layout/Layout";
import React from "react";
import { Router } from "./components/Router";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme} withGlobalStyles>
      <AppShell>
        <Layout>
          <Router />
        </Layout>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
