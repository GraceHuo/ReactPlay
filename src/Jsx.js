import React from "react";
import logo from "./logo.svg";
import styles from "./jsx.module.css";
function Jxs() {
  // 基本使用，表达式用{}包裹
  const name = "React";

  // 函数
  const obj = {
    firstName: "Harry",
    lastName: "Poter"
  };
  function formatName(name) {
    return name.firstName + " " + name.lastName;
  }

  // JSX 对象
  const greet = <div>good</div>;

  // 条件语句
  const show = false;

  // 数组
  const a = [0, 1, 2];

  // 属性

  // 模块化

  return (
    <div className={styles.app}>
      <div>hello, {name}</div>
      <div>{formatName(obj)}</div>
      {greet}
      {show ? greet : "login"}
      {show && greet}
      <ul>
        {a.map(item => (
          /*diff时候，首先比较type，然后是key，所以同级同类型元素，key值必须唯一 */
          <li key={item}>{item}</li>
        ))}
      </ul>
      <img
        src={logo}
        className={styles.logo}
        /*style={{ width: "50px", height: "30px" }}*/
        alt="logo"
      ></img>
    </div>
  );
}

export default Jxs;
