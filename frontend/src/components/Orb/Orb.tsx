import "./Orb.scss";

import React, { useMemo } from "react";

import classNames from "classnames";
import { store } from "../../store/store";
import { useSnapshot } from "valtio";
import { useViewportSize } from "@mantine/hooks";

const Orb = () => {
  const { status, result } = useSnapshot(store);
  const { height, width } = useViewportSize();

  const orbTextClasses = classNames({
    orb__text: true,
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

    if (width < 1243) return {};

    return {
      width: orbWidth,
      bottom: orbBottom,
      marginLeft: orbLeft,
    };
  }, [width]);

  return (
    <div className="orbWrapper">
      <div
        className="orb__bg"
        style={{
          backgroundImage: "url(ponder.jpg)",
        }}
      ></div>
      <div className="flex items-center justify-center">
        <div className="orb " style={orbStyle}>
          <div className="orb__smoke"></div>
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
