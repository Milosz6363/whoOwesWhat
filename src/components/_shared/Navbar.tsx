import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPage, setPage } from '../../store/pageSlice'
import'../../styles/navbar.scss'
import { Pages } from '../../store/pageSlice'


const Navbar = () => {
  const page = useSelector(fetchPage)
  const dispatch = useDispatch()

  return (
    <ul className='navbar'>
      {Object.values(Pages).map(pg => (
        <li 
          className={`navbar__item ${pg === page ? 'navbar__itemActive' : ''}`}
          onClick={() => dispatch(setPage(pg))}
        >
         {pg} 
        </li>
      ))}
    </ul>
  )
}

export default Navbar