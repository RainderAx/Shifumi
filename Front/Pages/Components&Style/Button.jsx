import { useState } from 'react';

export function ButtonBase({
  variant = "classic",
  title = "",
  children = "",
  onClick,
  component: Component = "button",
  style = {},
}) 

{
  /*const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };*/


  const computedStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",

    ...style,
  };

  const handleTitle = () => {
    if (!title) {
      return children;
    }
    return title;
  };

  const handleVariant = (variant, setIsHover) => {
    switch (variant) {
      case 'main':
        return {
          backgroundColor: "#0e0e5c",
          padding: '20px 70px',
          borderRadius: '20px',
          border: 'none',
          margin: '50px',
          fontWeight: 700,
          fontSize: '20px',
          color: '#fff',
          transition: 'all 0.3s',
          cursor: 'pointer',
        };
  
      case 'link':
        return {
          padding: '10px 20px',
          background: 'none',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        };
  
      case 'Idwin':
        return {
          position: 'fixed',
          padding: '10px 20px',
          background: 'none',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.3s ease-in-out',
          right: '10px',
        };
  
      case 'round':
        return {
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        };
  
      default:
        return {};
    }
  };
  

  const finalStyle = { ...computedStyle, ...handleVariant(variant) };

  return (
    <Component style={finalStyle} onClick={onClick} >
      {handleTitle()}
    </Component>
  );
}
