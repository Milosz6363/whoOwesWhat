import React, { FC, FormEvent, useRef } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, updatePeople } from '../../store/peopleSlice';
import { Person } from '../../data';

const PersonInput: FC = () => {
    const nameInput = useRef<any>()
    const numberInput = useRef<any>()
    const people = useSelector(fetchPeople)
    const dispatch = useDispatch()

    const addPerson = (e: FormEvent) => {
        e.preventDefault()
        if (nameInput.current.value === undefined) return alert('Person has to have a name')
        let paid = Number(numberInput.current.value)
        if (paid === undefined) 
            paid = 0 
        dispatch(updatePeople([
            ...people,
            new Person(Date.now(), nameInput.current.value, paid)
        ]))
        nameInput.current.value = ''
        numberInput.current.value = ''
    }
    return (
        <form className='input' onSubmit={addPerson}>
            <input 
                ref={nameInput}
                type="text" 
                className='input__left' 
                placeholder="Person's name"
            />
            <input 
                ref={numberInput}
                type="number" 
                className='input__middle' 
                placeholder="paid"
            />
            <button className='input__right'>
                <AddCircleOutlineIcon fontSize='large' />
            </button>
        </form>
    )
}

export default PersonInput