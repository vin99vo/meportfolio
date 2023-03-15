import { useState } from "react";
import EduAndSkills from "./bodyparts/EduAndSkills";
import ExtraCurricular from "./bodyparts/ExtraCurricular";
import WorkExp from "./bodyparts/WorkExp";
import "./Tabs.css";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState(0);

  const tabs = [
    { title: "Education and Skills", index: 1 },
    { title: "Work Experience", index: 2 },
    { title: "Extra Curricular", index: 3 },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-block">
        {tabs.map((tab) => (
          <button
            className={
              toggleTab === tab.index ? "tab-title active-tabs" : "tab-title"
            }
            onClick={() => setToggleTab(tab.index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content-tabs">
        <div className={toggleTab === 1 ? "content active-content" : "content"}>
          <EduAndSkills />
        </div>
        <div className={toggleTab === 2 ? "content active-content" : "content"}>
          <WorkExp />
        </div>
        <div className={toggleTab === 3 ? "content active-content" : "content"}>
          <ExtraCurricular />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
