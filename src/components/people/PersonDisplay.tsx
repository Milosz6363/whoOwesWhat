import React, { FC } from 'react'
import { Person } from '../../data'

interface Props{
    person: Person
}

const PersonDisplay:FC<Props> = ({ person }) => {
  return (
    <div>
        {person.name}
    </div>
  )
}

export default PersonDisplay