import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // This is one of the things passed through PROPS, you will find the height of this in App.js
    height: styles.topBarHeight,
    // This one too, but here you can notice that there s not argument including the opacity like in App.js line 27
    backgroundColor: styles.funky(),
    // check App.js , line:28 to understand
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  return (
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
      App
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;
