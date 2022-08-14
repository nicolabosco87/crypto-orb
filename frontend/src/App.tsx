import { AppShell, MantineProvider } from "@mantine/core";

import Layout from "./components/Layout/Layout";
import { Router } from "./components/Router";
import { theme } from "./theme";

const App = () => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <AppShell>
        <Layout>
          <Router />
        </Layout>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
