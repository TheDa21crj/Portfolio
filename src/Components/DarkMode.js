import React from "react";
import DMCss from "./CSS/DarkMode.module.css";
export default function DarkMode() {
  return (
    <div>
      <div className={DMCss.darkmodeBtn} onClick={() => dispatch(darkmode())}>
        {showDark ? (
          <Brightness4Icon
            fontSize="large"
            onClick={() => {
              setDark(false);
              dispatch(darkmode());
            }}
          />
        ) : (
          <Brightness7Icon
            fontSize="large"
            onClick={() => {
              setDark(true);
              dispatch(darkmode());
            }}
          />
        )}
      </div>{" "}
    </div>
  );
}
