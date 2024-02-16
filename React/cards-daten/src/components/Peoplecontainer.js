import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Peoplecontainer() {
    const [people, setPeople] = useState([]);
    const [filteredpeople, setFilteredPeople] = useState([]);
    useEffect(() => {
        fetch("https://65a7b10f94c2c5762da751b1.mockapi.io/person").then
            (res => res.json().then(data => {
                setPeople(data);
                setFilteredPeople(data);
            }))
    }, [])

    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.includes(filter));
        setFilteredPeople(filtered);
    }
    return (
        <div>
            <div>
                <input
                    className="border p-4 fixed bg-white"
                    type="text"
                    placeholder='Search'
                    onChange={(el) => {
                        filterPeople(el.target.value);
                    }} />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredpeople.map(person => {
                    return <Card name={person.name} imageURL={person.avatar} title={person.jobtitle} />
                })}
            </div>


        </div>

    );
}
