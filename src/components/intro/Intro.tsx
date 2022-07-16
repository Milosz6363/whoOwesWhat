import React from 'react'
import { useDispatch } from 'react-redux'
import '../../styles/app.scss'
import { setPage } from '../../store/pageSlice'
import { Pages } from '../../store/pageSlice'

const Intro = () => {
  const dispatch = useDispatch()

  return (
    <div className='contentCard'>
      <div className='contentCard__top'>
        <h1 className='contentCard__title'>Who owes what?</h1>
        <p>
          Sorting out debts  with friend  was never easier!
        </p>
        <p>
          Just give us the amount of money everyone has paid and we will deal with the rest.
        </p>
      </div>
      <div className='contentCard__bottom'>
        <button className='contentCard__submit' onClick={() => dispatch(setPage(Pages.people))}>Sort stuff out</button>
      </div>
    </div>
  )
}

export default Intro