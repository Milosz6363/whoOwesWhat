import React, { FC, FormEvent, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Person } from '../../data'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../../styles/person.scss'
import { useDispatch } from 'react-redux';
import { deletePerson, editPerson } from '../../store/peopleSlice';

interface Props {
  person: Person
}

const PersonDisplay: FC<Props> = ({ person }) => {
  const [isInput, setIsInput] = useState<boolean>(false)
  const [personName, setPersonName] = useState<string>(person.name)
  const [personPaid, setPersonPaid] = useState<number>(person.paid)
  const dispatch = useDispatch()

  const changeView = (view: 'input' | 'display') => {
    if (view === 'input') setIsInput(true)
  }

  const changePerson = (e: FormEvent) => {
    e.preventDefault()
    dispatch(editPerson(
      [
        person,
        {
          _id: person._id,
          name: personName,
          paid: personPaid,
          debts: person.debts
        }
      ]
    ))
    setIsInput(false)
  }

  if (isInput) {
    return (
      <form className='person__input' onSubmit={changePerson}>
        <input
          value={personName}
          onChange={e => setPersonName(e.target.value)}
          type='text'
          className='person__inputLeft'
        />
        <input
          value={personPaid}
          onChange={e => setPersonPaid(Number(e.target.value))}
          type='number'
          className='person__inputMiddle'
        />
        <button className='person__inputRight'>
          <DoneOutlineOutlinedIcon />
        </button>
      </form>
    )
  }
  return (
    <div className='person'>
      <div className='person__left'>
        <div>{person.name}</div>
        <div>{person.paid}</div>
      </div>
      <div className='person__right'>
        <div onClick={() => changeView('input')} className='edit'>
          <ModeEditOutlineOutlinedIcon />
        </div>
        <div onClick={() => dispatch(deletePerson(person))} className='delete'>
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

export default PersonDisplay