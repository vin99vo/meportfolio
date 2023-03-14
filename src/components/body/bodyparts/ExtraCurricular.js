import "./ExtraCurricular.css";
import Card from "../../general/Card";
import Content from "../../general/Content";

const ExtraCurricular = () => {
  const contents = [{
    title: 'Heads of State Ultimate Frisbee Club',
    date:'2017 - present',
    role: 'Club member, player.',
    description: [],
  },
  {
    title: 'Melbourne University Ultimate Frisbee Club',
    date:'2017 - present',
    role: 'President (2019 - 2020), player',
    description: ["• Engaging with new and current members to ensure comfort and satisfaction during and outside of club activities.",
    " • Communicating with current and past committee members to manage club processes and activities.",
    "  • Liaising with external parties to ensure efficient communication and maintain effective relationships."]
  }
]
const contentList = contents.map((x) => <Content object={x}/>)
  return (
    <div className="exc">
      <Card>
        <h2>Extra Curricular Activities</h2>
        {contentList}
      </Card>
    </div>
  );
};

export default ExtraCurricular;
