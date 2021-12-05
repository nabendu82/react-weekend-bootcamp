import React from 'react'
import Person from './Person';

const PersonList = () => {
    //const names = ['Nabendu', 'Shikha', 'Hriday'];
    const persons = [
        {
            id: 1,
            name: 'Nabendu',
            age: 39,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Shikha',
            age: 38,
            skills: 'JavaScript'
        },
        {
            id: 3,
            name: 'Hriday',
            age: 8,
            skills: 'HTML'
        },
    ]

    return persons.map(person => <Person key={person.id} person={person} />);
}

export default PersonList
