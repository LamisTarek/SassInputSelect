"use client";
import React from "react";
import { useState } from "react";
import styles from "./SelectMenue.module.scss";

const SelectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("black");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: { value: string; color: string }) => {
    setSelectedValue(item.value);
    setSelectedColor(item.color);
    setIsOpen(false);
  };

  const menuItems = [
    { value: "Saturday", color: "red" },
    { value: "Sunday", color: "orange" },
    { value: "Monday", color: "maroon" },
    { value: "Tuesday", color: "green" },
    { value: "Wednesday", color: "blue" },
    { value: "Thursday", color: "indigo" },
    { value: "Friday", color: "violet" },
  ];

  return (
    <div className={styles.customSelect}>
      <label className={styles.selectLabel}>Days</label>
      <div className={styles.selectContainer} onClick={toggleDropdown}>
        <span className={styles.selectValue} style={{ color: selectedColor }}>
          {selectedValue || "Select a day"}
        </span>
        <div
          className={styles.selectArrow}
          style={{ borderTopColor: selectedColor }}
        ></div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {menuItems.map((item) => (
            <div
              key={item.value}
              className={`${styles["option"]} ${
                selectedValue === item.value ? styles["selected"] : ""
              }`}
              style={{ color: item.color }}
              onClick={() => handleSelect(item)}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
