import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  const [hovered, setHovered] = React.useState(false);
  const [mouseMovedOutside, setMouseMovedOutside] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setMouseMovedOutside(false);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMouseMovedOutside(true);
  };

  return (
    <div className="h-[42px] custom-padding ">
      <label
        className={`flex items-center justify-between checkbox-container`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>{label}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none"
        />
        <span
          className={`checkbox custom-checkbox ${checked ? "checked" : ""} ${
            hovered ? "hovered" : ""
          } ${mouseMovedOutside ? "moved-outside" : ""}`}
        >
          {(checked || hovered) && (
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
