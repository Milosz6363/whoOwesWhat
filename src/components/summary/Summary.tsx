import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchPeople } from '../../store/peopleSlice'
import PeopleAccordion from './PeopleAccordion'
import '../../styles/accordion.scss'
import { Person } from '../../data'

const Summary = () => {
  const people = useSelector(fetchPeople)

  const [currentPerson, setCurrentPerson] = useState<Person | undefined>(undefined)

  return (
    <div className='contentCard'>
      <div className="contentCard__top">
        <h1 className="contentCard__title">Summary.</h1>
        <div className="contentCard__accordion">
          {people.map((person: Person) => (
            <PeopleAccordion key={person._id} person={person} collapsed={person._id !== currentPerson?._id} callback={() => {
              if (currentPerson?._id === person._id) setCurrentPerson(undefined)
              else setCurrentPerson(person)}
            }/>
          ))}
        </div>
      </div>
      <div className="contentCard__bottom">
        <button className="contentCard__submit">Go back to people</button>
      </div>
    </div>
  )
}

export default Summary