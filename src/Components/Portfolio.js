import React, { useState } from "react";
import { Link } from "react-router-dom";
import JSONDATA from "./../Data/Portfolio.json";
import ProWork from "./ProWork";
import PCss from "./CSS/Portfolio.module.css";

export default function Portfolio() {
  const [search, setSearch] = useState("");

  const filterData = async function (e) {
    setSearch(e.target.value);
  };
  return (
    <div className={PCss.mDiv} id="portfolio" data-aos="fade-up">
      <h1>Portfolio</h1>
      <div className={PCss.PinpDiv}>
        <input
          type="text"
          name=""
          id={PCss.searchInp}
          placeholder="find a project"
          onChange={filterData}
        />
      </div>
      <div className={PCss.pDiv}>
        {JSONDATA.filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        }).map((value, key) => {
          return (
            <div key={key}>
              <ProWork
                img={value.img}
                title={value.name}
                des={value.description}
                link={{
                  pathname: `${value.url}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
