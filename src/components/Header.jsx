import React from "react";

const Header = () => {
  const arr = [
    "agriculture",
    "animal",
    "beauty",
    "education",
    "electronic",
    "food",
    "furnishing",
    "hardware",
    "liquor/beverages",
    "manufacturing",
    "medical/health",
    "services",
    "sports",
    "technology",
    "vehicles",
  ];
  return (
    <select name="" id="">
      {arr.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Header;
