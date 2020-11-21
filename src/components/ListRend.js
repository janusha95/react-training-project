import React from 'react'
import ListRendComp from './ListRendComp.js'


function ListRend() {
    const Students = [
        {
            id: 1,
            name: 'Jan',
            age: 25,
            loc: 'ON'
        },
        {
            id: 2,
            name: 'V',
            age: 27,
            loc: 'AB'
        },
        {
            id: 3,
            name: 'Nini',
            age: 24,
            loc: 'BC'
        }
    ]
        const StudentList = Students.map(Student => 
        <ListRendComp key= {Student.id} Student= {Student}/>
        )
        return <div>{StudentList}</div>
}

export default ListRend
