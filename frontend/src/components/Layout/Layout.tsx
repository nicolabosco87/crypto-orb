import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import React from "react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  layoutBg: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "0",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      backgroundColor: "black",
      backgroundSize: "cover",
      opacity: 0.2,
    },
  },
}));

const Layout: React.FC = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div>
      <Header />
      <div
        className={classes.layoutBg}
        style={{
          backgroundImage: "url(ponder.jpg)",
        }}
      ></div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
