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
    ':hover': {
      backgroundColor: '#039be5',
    },
    ...style,
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
          backgroundColor: "#a2a2e7",
          padding: "20px 70px",
          borderRadius: "20px",
          border: "none",
          margin: "50px",
          fontWeight: 700,
          fontSize: "20px",
          color: "#fff",
          transition: "all 0.3s",
        };
        
      case "link":
        return {
          position: "fixed",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          background: "none",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        };

      case "Idwin":
        return {
          position: "fixed",
          top: "10px",
          left: "10px",
          padding: "10px 20px",
          background: "none",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "color 0.3s ease-in-out",
        };

      default:
        return {};
    }
  };

  const finalStyle = { ...computedStyle, ...handleVariant(variant) };

  return (
    <Component style={finalStyle} onClick={onClick}>
      {handleTitle()}
    </Component>
  );
}
