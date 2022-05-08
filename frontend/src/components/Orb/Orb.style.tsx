import { createStyles, keyframes } from "@mantine/core";

export const useOrbStyles = createStyles((theme, _params, getRef) => ({
  orbWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },

  orb: {
    overflow: "hidden",
    position: "absolute",
    maxWidth: "80%",
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    width: "300px",
    bottom: 0,
    left: "50%",

    // @media (max-width: 1243px) {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      transform: "translateX(-50%)",
      width: "500px",
      bottom: "5vh",
      background: `radial-gradient(
        circle at bottom,
        #81e8f615,
        #76deef15 10%,
        #05519415 80%,
        #06274515 100%
      )`,
    },

    background: `radial-gradient(
      circle at bottom,
      #2f646b75,
      #76deef75 10%,
      #05519475 80%,
      #06274575 100%
    )`,
    animation: `${glowAnimation} 5s linear infinite`,

    "&:before": {
      content: '""',
      position: "absolute",
      top: "1%",
      left: "5%",
      width: "90%",
      height: "90%",
      borderRadius: "100%",
      background: `radial-gradient(
        circle at top,
        rgb(232, 223, 255),
        rgba(255, 255, 255, 0) 58%
      )`,
      //   "-webkit-filter": "blur(5px)",
      filter: "blur(5px)",
      zIndex: 2,
      opacity: 0.5,

      //   @media (min-width: 1243px) {
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        opacity: 0.7,
      },
    },

    "&:after": {
      content: '""',
      position: "absolute",
      display: "none",
      top: "5%",
      left: "10%",
      width: "80%",
      height: "80%",
      borderRadius: "100%",
      //   -webkit-filter: blur(1px);
      filter: "blur(1px)",
      zIndex: 2,
      //   -webkit-transform: rotateZ(-30deg);
      transform: "rotateZ(-30deg)",
      opacity: 0.7,

      //   @media (min-width: 1024px) {
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        opacity: 1,
      },
    },
  },
  orbSmoke: {
    position: "relative",
    height: "100%",
    width: "100%",
    filter: "url(#wave)",
    animation: `${smokeRotateAnimation} 30s linear infinite`,

    "&:before": {
      content: '""',
      position: "absolute",
      top: "0%",
      left: "5%",
      right: "5%",
      bottom: "5%",
      // border: 10% solid rgb(2, 62, 226);
      borderRadius: "50%",
      filter: "url(#wave) blur(10px)",
      animation: `${smokeAnimation} 4s linear infinite`,
      opacity: 1,
    },
  },
  orbText: {
    position: "absolute",
    zIndex: 5,
    color: "white",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    opacity: 0,
    textAlign: "center",
    lineHeight: 1,
    padding: "8%",
    "&.out": {
      animation: `${textOutAnimation} 2s cubic-bezier(0.17, 0.84, 0.44, 1) forwards`,
    },
    "&.in": {
      animation: `${textInAnimation} 2s cubic-bezier(0.17, 0.84, 0.44, 1) forwards`,
    },
  },
}));

// Keyframes

export const smokeAnimation = keyframes({
  "0%": {
    boxShadow: "0 0 50px rgb(141, 143, 177), inset 0 0 70px rgb(141, 143, 177)",
  },
  "20%": {
    boxShadow: "0 0 50px rgb(106, 139, 199), inset 0 0 70px rgb(106, 139, 199)",
  },
  "40%": {
    boxShadow: "0 0 50px rgb(71, 85, 212), inset 0 0 70px rgb(71, 85, 212)",
  },
  "60%": {
    boxShadow: "0 0 50px rgb(107, 83, 153), inset 0 0 70px rgb(107, 83, 153)",
  },
  "80%": {
    boxShadow: "0 0 50px rgb(162, 141, 177), inset 0 0 70px rgb(162, 141, 177)",
  },
  "100%": {
    boxShadow: "0 0 50px rgb(141, 143, 177), inset 0 0 70px rgb(141, 143, 177)",
  },
});

export const glowAnimation = keyframes({
  "0%": {
    boxShadow: "0px 0px 15px 5px #cccccc22",
  },
  "60%": {
    boxShadow: "0px 0px 15px 10px #adc9ff44",
  },
  "100%": {
    boxShadow: "0px 0px 15px 5px #cccccc22",
  },
});

export const smokeRotateAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const textInAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.5)",
    filter: "blur(6px)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
    filter: "blur(1px)",
  },
});

export const textOutAnimation = keyframes({
  "0%": {
    opacity: 1,
    transform: "scale(1)",
    filter: "blur(1px)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(2)",
    filter: "blur(6px)",
  },
});
