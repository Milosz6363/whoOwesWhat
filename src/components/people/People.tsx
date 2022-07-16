import React from 'react'
import { useSelector } from 'react-redux'
import { fetchPeople } from '../../store/peopleSlice'
import '../../styles/people.scss'
import PersonDisplay from './PersonDisplay'
import PersonInput from './PersonInput'

const People = () => {
  const people = useSelector(fetchPeople)
  
  return (
    <div className="contentCard">
      <div className="contentCard__top">
        <h1 className='contentCard__title'>Add people here.</h1>
        <div className="contentCard__input">
          <PersonInput />
          <div className="contentCard__peopleDisplay"></div>
          {people.map(person => (
            <PersonDisplay person={person} />
          ))}
        </div>
      </div>
      <div className="contentCard__bottom">
        <button className="contentCard__submit">Reveal your debts</button>
      </div>
    </div>
  )
}

export default People