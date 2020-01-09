import React, { useState, useEffect } from "react";

export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  // 相当于componentDidMount,comdponentWillUnmount和componentDidUpdate的集合
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
