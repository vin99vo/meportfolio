import { useState } from "react";
import EduAndSkills from "./bodyparts/EduAndSkills";
import ExtraCurricular from "./bodyparts/ExtraCurricular";
import WorkExp from "./bodyparts/WorkExp";
import "./Tabs.css";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState(0);

  const toggleTabHandler = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-block">
        <button
          className={toggleTab === 1 ? "tab-title active-tabs" : "tab-title"}
          onClick={() => toggleTabHandler(1)}
        >
          Education and Skills
        </button>
        <button
          className={toggleTab === 2 ? "tab-title active-tabs" : "tab-title"}
          onClick={() => toggleTabHandler(2)}
        >
          Work Experience
        </button>
        <button
          className={toggleTab === 3 ? "tab-title active-tabs" : "tab-title"}
          onClick={() => toggleTabHandler(3)}
        >
          Extra Curricular 
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleTab === 1 ? "content active-content" : "content"}>
          <EduAndSkills/>
        </div>
        <div className={toggleTab === 2 ? "content active-content" : "content"}>
         <WorkExp/>
        </div>
        <div className={toggleTab === 3 ? "content active-content" : "content"}>
          <ExtraCurricular/>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
