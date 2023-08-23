import React, { useMemo, useState } from "react";
import Button from "./Button";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const [title, settitle] = useState("Ascending");
  const ChangeType =() => {
    settitle((prevTitle) =>
      prevTitle === "Ascending" ? "Decending" : "Ascending"
    );
  };

  const sortedList = useMemo(() => {
    return title === "Ascending"
      ? props.items.sort((a, b) => b - a)
      : props.items.sort((a, b) => a - b);
  }, [props.items, title]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={ChangeType}>Change To {title} Order</Button>
    </div>
  );
};

export default React.memo(DemoList);
