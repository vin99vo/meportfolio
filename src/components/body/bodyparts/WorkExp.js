import Card from "../../general/Card";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="workexp">
      <Card>
        <h2>Work Experience</h2>
        <div className="job1">
          <h3>Australian Bureau of Statistics, Melbourne</h3>
          <h4>Nov 2022 – Present</h4>
          <h5>Associate</h5>
          <div className="key-responsibilities">
            <p>
              • Liaise with businesses to understand data and formulate
              questions to improve information reliability.
            </p>
            <p>
              • Research key business data to ensure accuracy and update
              database systems correctly.
            </p>
            <p>
              • Assessing quality of data and removing or cleaning data as
              appropriate.
            </p>
          </div>
        </div>
        <div className="job1">
          <h3>St Vincent Institute of Education, Melbourne</h3>
          <h4>Feb 2018-Nov 2018</h4>
          <h5>Tutor</h5>
          <div className="key-responsibilities">
            <p>
              • Overlooking and ensuring the progress of students’ learning
              through completion and understanding of assigned work.
            </p>
            <p>
              • Preparing strategies in order to present the teaching material
              in an understandable manner.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WorkExp;
