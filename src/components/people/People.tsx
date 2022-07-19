import React from 'react'
import { useSelector } from 'react-redux'
import { fetchPeople } from '../../store/peopleSlice'
import '../../styles/people.scss'
import PersonDisplay from './PersonDisplay'
import PersonInput from './PersonInput'

const People = () => {
  const people = useSelector(fetchPeople)

  const goToSummary = () => {
    if (people.length === 0) return alert('You have to add people to resolve debts')
    else if (people.length === 1) return alert('Seriously? You want to resolve debt you have to Yourself? Add more people')
  }
  return (
    <div className="contentCard">
      <div className="contentCard__top">
        <h1 className='contentCard__title'>Add people here.</h1>
        <div className="contentCard__input">
          <PersonInput />
          <div className="contentCard__peopleDisplay">
            {people.map(person => (
              <PersonDisplay key={person._id} person={person} />
            ))}
          </div>
        </div>
      </div>
      <div className="contentCard__bottom">
        <button className="contentCard__submit" onClick={goToSummary}>Reveal your debts</button>
      </div>
    </div>
  )
}

export default People