import React, { useState } from "react";
import Checkbox from "./checkbox";
import "./custom.css";

function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckboxStates({
      page1: newCheckedState,
      page2: newCheckedState,
      page3: newCheckedState,
      page4: newCheckedState,
    });
  };

  const handleCheckboxChange = (page) => {
    const newCheckboxStates = {
      ...checkboxStates,
      [page]: !checkboxStates[page],
    };
    setCheckboxStates(newCheckboxStates);

    const allChecked = Object.values(newCheckboxStates).every((state) => state);
    setAllChecked(allChecked);
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center  py-10 font-montserrat">
      <div className="bg-white custom-shadow custom-card rounded-lg  mt-[85px] leading-[18.2px]">
        <div className="mt-[10px]">
          <Checkbox
            label="All pages"
            checked={allChecked}
            onChange={handleAllChange}
          />
        </div>

        <div className="hrContainer">
          <hr className="" />
        </div>
        <Checkbox
          label="Page 1"
          checked={checkboxStates.page1}
          onChange={() => handleCheckboxChange("page1")}
        />
        <Checkbox
          label="Page 2"
          checked={checkboxStates.page2}
          onChange={() => handleCheckboxChange("page2")}
        />
        <Checkbox
          label="Page 3"
          checked={checkboxStates.page3}
          onChange={() => handleCheckboxChange("page3")}
        />
        <Checkbox
          label="Page 4"
          checked={checkboxStates.page4}
          onChange={() => handleCheckboxChange("page4")}
        />

        <div className="hrContainer">
          <hr className="" />
        </div>
        <div className="buttonContainer mb-[10px]">
          <button className="w-full bg-[#FFCE22] text-[#1F2128] h-[40px] p-[10px_20px] gap-[10px] rounded-[4px] doneButton">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
