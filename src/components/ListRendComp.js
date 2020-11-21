import React from 'react'

function ListRendComp({Student}) {
    return (
        <div>
            <h2>
                {Student.id}. I'm {Student.name} age {Student.age} live in {Student.loc}
            </h2>
        </div>
    )
}

export default ListRendComp
