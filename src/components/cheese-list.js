//TODO: REMOVE THIS
import React from 'react';


export default function CheeseList(props) {
  const cheeseMap = props.cheeses.map( (cheese, i) => <li key={i}>{cheese}</li>)
  return (
    <ul>
      {cheeseMap}
    </ul>
  )
}