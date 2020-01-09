import React, { useState, useEffect } from "react";

export default function CustomHookPage(props) {
  const [count, setCount] = useState(0);

  // 和didMount, didUpdate类似
  useEffect(() => {
    console.log("useEffect， count");
    // 只需要在count发生改变时执行
    document.title = `You have clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h3>CustomHookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  );
}

// 自定义一个hook，命名要以use开头
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("useEffect， timer");
    // 只需要在didMount时候执行
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 类似willUnmount
    return clearInterval(timer);
  }, []);
  return date;
}

// Hook 的使用规则：
// 1. 只能在函数最外层调用Hook。不要在循环、条件判断或者子函数中调用
// 2. 只能在React的函数中调用Hook。不要在其他JavaScript函数中调用。 （还有一个地方可以调用Hook -- 就是自定义Hook中）
