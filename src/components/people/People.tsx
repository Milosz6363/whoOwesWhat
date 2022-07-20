import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { creditorFromPerson, evaluateDebt } from '../../data'
import { Pages, setPage } from '../../store/pageSlice'
import { editPerson, fetchPeople } from '../../store/peopleSlice'
import '../../styles/people.scss'
import PersonDisplay from './PersonDisplay'
import PersonInput from './PersonInput'

const People = () => {
  const people = useSelector(fetchPeople)
  const dispatch = useDispatch()

  const goToSummary = () => {
    console.log('summary called')
    if (people.length === 0) return alert('You have to add people to resolve debts')
    else if (people.length === 1) return alert('Seriously? You want to resolve debt you have to Yourself? Add more people')

    people.forEach(person => { 
      console.log(person)
      let debts = people.filter(prsn => prsn._id !== person._id).map(prsn => creditorFromPerson(prsn))
      debts.map(debt => evaluateDebt(person, debt, people.length))
      debts = debts.filter(debt => debt.amount !== undefined)
      console.log(person.name, debts)
      dispatch(editPerson([
        person,
        {
          _id: person._id,
          name: person.name,
          paid: person.paid,
          debts: debts
        }
      ]))
    })
    dispatch(setPage(Pages.summary))
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