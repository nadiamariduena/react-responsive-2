import React from "react";

const FooterMenu = ({ menuItems, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        // backgroundColor: "#333",
        backgroundColor: styles.funky(),
        color: "#111",
        position: "fixed",
        bottom: 0,
        fontWeight: "bold",
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <span style={{ fontSize: 20 }}>{item.link}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;
