// name, id, dept, year of passing
// 3 student
import React from 'react'

const Student = (props) => {
    const {id,name,dept,year} = props;
  return (
    <h3>Id : {id} Name : {name} Dept : {dept} Year of passing : {year} </h3 >
  )
}
export default Student