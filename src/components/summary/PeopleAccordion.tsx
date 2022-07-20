import React, { FC } from 'react'
import { Person } from '../../data'
import '../../styles/accordion.scss'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

interface Props {
  person: Person
  collapsed: boolean
  callback: () => void
}

const PeopleAccordion: FC<Props> = ({ person, collapsed, callback }) => {
  return (
    <div className='accrodion'>
      <div className="accordion__header" onClick={callback}>
        <h2>{person.name}</h2>
        <div >
          {collapsed ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
        </div>
      </div>
      <div className={`accordion__content ${collapsed ? 'accordion__contentCollapsed' : ''}`}>
        {person.debts.length === 0 ?
          <p>This person has no debts</p>
          :
          <table>
            <thead>
              <tr>
                <th>To who owes</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {person.debts.map(debt => (
                <tr key={debt._id}>
                  <td>{debt.name}</td>
                  <td>{debt.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default PeopleAccordion