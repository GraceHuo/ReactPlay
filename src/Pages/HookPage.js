import React, { useState, useEffect } from "react";

export default function HookPage(props) {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // 和didMount, didUpdate类似
  useEffect(() => {
    console.log("useEffect， count");
    // 只需要在count发生改变时执行
    document.title = `You have clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("useEffect， timer");
    // 只需要在didMount时候执行
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 类似willUnmount
    return clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
