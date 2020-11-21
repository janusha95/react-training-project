import React, { Component } from 'react'

class StudentC extends Component {
    render()
{ 
    const {id,name,dept,year,children} = this.props;
    return ( 
        <div>
            <h3>
                Id : {id} Name : {name} Dept : {dept} Year of passing : {year}
            </h3>
            {children}
        </div>
        )

}
}

export default StudentC