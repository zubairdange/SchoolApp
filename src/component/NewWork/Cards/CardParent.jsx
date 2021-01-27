import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCards } from "../State/Selector/CardSelector";
import { MyCard } from "../Cards/MyCard";

export const CardParent = () => {
  const selector = useSelector(getAllCards);
  const [data, setData] = useState();
  useEffect(() => {
    setData(selector);
  }, [selector]);
  return (
    <React.Fragment>
      <Row>
        {data &&
          data.map((item) => {
            return <MyCard cdata={item} />;
          })}
      </Row>
    </React.Fragment>
  );
};
