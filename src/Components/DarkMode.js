import React, { useState, useEffect } from "react";
import DMCss from "./CSS/DarkMode.module.css";
import { useSelector, useDispatch } from "react-redux";
import { darkmode } from "./../actions/index";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

export default function DarkMode() {
  const [showDark, setDark] = useState(false);

  const myState = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();
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
