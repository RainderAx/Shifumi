import React from 'react';

export function ButtonBase({
  variant = "classic",
  title = "",
  children = "",
  onClick,
  component: Component = "button",
  style = {},
}) {
  const computedStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    ...style
  };

  const handleTitle = () => {
    if (!title) {
      return children;
    }
    return title;
  };

  const handleVariant = (variant) => {
    switch (variant) {
      case "main":
        return {
          backgroundColor: "rgb(162, 162, 239)",
          padding: "20px 70px",
          borderRadius: "20px",
          border: "none",
          margin: "50px",
          fontWeight: 700,
          fontSize: "20px",
          color: "white",
          transition: "all 0.3s"
        };
      case "link":
        return {
          position: "fixed",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          background: "#03a9f4",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out"
        };
      default:
        return {};
    }
  };

  const finalStyle = {...computedStyle, ...handleVariant(variant)};

  return (
    <Component style={finalStyle} onClick={onClick}>
      {handleTitle()}
    </Component>
  );
}
