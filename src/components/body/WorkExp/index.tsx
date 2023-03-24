import { Card } from '../../general/Card'
import { Content } from '../../general/Content'
import { type FC } from 'react'
import { WorkExpSection } from './styles'

type WorkExpProps = {
  passedID: string
}

export const WorkExp: FC<WorkExpProps> = ({ passedID }) => {
  const contents = [
    {
      title: 'Australian Bureau of Statistics, Melbourne',
      date: 'Nov 2022 – Present',
      role: 'Registers Specialist',
      description: [
        '• Liaise with businesses to understand data and formulate questions to improve information reliability.',
        '• Research key business data to ensure accuracy and update database systems correctly.',
        '  • Assessing quality of data and removing or cleaning data as appropriate.'
      ]
    },
    {
      title: 'St Vincent Institute of Education, Melbourne',
      date: 'Feb 2018-Nov 2018',
      role: 'Tutor',
      description: [
        '• Overlooking and ensuring the progress of students’ learning through completion and understanding of assigned work.',
        ' • Preparing strategies in order to present the teaching material in an understandable manner.',
        ' • 4/5 students averaging above 85% on fortnightly assignments by end of year.'
      ]
    }
  ]
  const contentList = contents.map((x, idx) => (
    <Content
      title={x.title}
      date={x.date}
      role={x.role}
      descript={x.description}
      key={idx}
    />
  ))
  return (
    <WorkExpSection id={passedID}>
      <Card>
        <h2>Work Experience</h2>
        {contentList}
      </Card>
    </WorkExpSection>
  )
}
