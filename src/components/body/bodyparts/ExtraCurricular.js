import "./ExtraCurricular.css";
import Card from "../../general/Card";

const ExtraCurricular = () => {
  return (
    <div className="exc">
      <Card>
        <h2>Extra Curricular Activites</h2>
        <div className="exc1">
          <h3>Heads of State Ultimate Frisbee Club</h3>
          <h4>2017 - present</h4>
          <h5>Club member, player.</h5>
        </div>
        <div className="exc1">
          <h3>Melbourne University Ultimate Frisbee Club</h3>
          <h4>2017 - present</h4>
          <h5>President (2019 - 2020)</h5>
          <div className="key-responsibilities">
            <p>
              • Engaging with new and current members to ensure comfort and
              satisfaction during and outside of club activities
            </p>
            <p>
              • Communicating with current and past committee members to manage
              club processes and activities.
            </p>
            <p>
              • Liaising with external parties to ensure efficient communication
              and maintain effective relationships.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExtraCurricular;
