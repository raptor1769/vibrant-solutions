import { forwardRef } from "react";

const ScrollTo = forwardRef(({ children, onClick }, ref) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div className="nav-item" onClick={handleClick}>{children}</div>;
});

export default ScrollTo;
