import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Person } from '../../data'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../../styles/person.scss'

interface Props {
  person: Person
}

const PersonDisplay: FC<Props> = ({ person }) => {
  const [isInput, setIsInput] = useState<boolean>(false)
  const personName = useRef<any>()
  const personAmount = useRef<any>()

  const changeView = (view: 'input' | 'display') => {
    if (view === 'input') {
      setIsInput(true)
      personName.current.value = person.name
      personAmount.current.value = person.paid
    }
  }

  if(isInput){
    return (
      <form className='person__input'>
        <input 
          ref={personName}
          type='text' 
          className='person__inputLeft'
        />
        <input 
          ref={personAmount}
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
        <div onClick={() => changeView('input')}>
          <ModeEditOutlineOutlinedIcon />
        </div>
        <div>
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

export default PersonDisplay