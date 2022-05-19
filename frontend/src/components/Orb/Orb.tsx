import React, { useMemo } from "react";

import classNames from "classnames";
import { store } from "../../store/store";
import { useMantineTheme } from "@mantine/core";
import { useOrbStyles } from "./Orb.style";
import { useSnapshot } from "valtio";
import { useViewportSize } from "@mantine/hooks";

const Orb = () => {
  const { status, result } = useSnapshot(store);
  const theme = useMantineTheme();
  const { width } = useViewportSize();
  const { classes } = useOrbStyles();

  const orbTextClasses = classNames({
    [classes.orbText]: true,
    in: status === "in",
    out: status === "out",
  });

  const orbStyle: React.CSSProperties = useMemo(() => {
    const bgWidth = 1244;
    // const bgHeight = 750;
    const bgOrbWidth = 347;
    const bgOrbLeft = 5; // 26;
    const bgOrbBottom = -63;

    const orbWidth = (bgOrbWidth * width) / bgWidth;
    const orbBottom = (bgOrbBottom * width) / bgWidth;
    const orbLeft = (bgOrbLeft * width) / bgWidth;

    if (width < theme.breakpoints.lg) return {};

    return {
      width: orbWidth,
      bottom: orbBottom,
      marginLeft: orbLeft,
    };
  }, [theme.breakpoints.lg, width]);

  return (
    <div className={classes.orbWrapper}>
      <div
        className="orb__bg"
        style={{
          backgroundImage: "url(ponder.jpg)",
        }}
      ></div>
      <div className="flex items-center justify-center">
        <div className={classes.orb} style={orbStyle}>
          <div className={classes.orbSmoke}></div>
          <div className={orbTextClasses}>{result}</div>
        </div>

        <svg>
          <filter id="wave">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values="0.02;0.005;0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>
      </div>
    </div>
  );
};

export default Orb;
