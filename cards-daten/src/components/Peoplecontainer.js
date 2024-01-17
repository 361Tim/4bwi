import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Peoplecontainer() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch("https://65a7b10f94c2c5762da751b1.mockapi.io/person").then
            (res => res.json().then(data => {
                setPeople(data);
            }))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <Card name={person.name} imageURL={person.avatar} title={person.jobtitle} />
                })}
            </div>


        </div>

    );
}
