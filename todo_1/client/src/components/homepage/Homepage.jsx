import React from 'react'
import './Homepage.css';
import InputTodo from '../InputTodo';
import ListTodos from '../ListTodos';

const Homepage = () => {
  return (
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
  )
}

export default Homepage
