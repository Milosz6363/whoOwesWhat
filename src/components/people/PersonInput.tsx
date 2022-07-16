import React, { FC, FormEvent, useRef } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useSelector } from 'react-redux';
import { fetchPeople } from '../../store/peopleSlice';

const PersonInput: FC = () => {
    const nameInput = useRef(null)
    const numberInput = useRef(null)
    const people = useSelector(fetchPeople)

    const addPerson = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <form className='input' onSubmit={addPerson}>
            <input 
                ref={nameInput}
                type="text" 
                className='input__left' 
            />
            <input 
                ref={numberInput}
                type="number" 
                className='input__middle' 
            />
            <button className='input__right'>
                <AddCircleOutlineIcon fontSize='large' />
            </button>
        </form>
    )
}

export default PersonInput