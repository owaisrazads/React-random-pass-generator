import React, { useRef, useState } from 'react'
import Card from './components/Card'


const App = () => {

  // const ref = useRef()
  const todoVal = useRef()
  const [data, setData] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    console.log(todoVal.current.value);
    data.push(todoVal.current.value)
    setData([...data])
    todoVal.current.value = ''
  }

  const deleteTodo = (index) =>{
    console.log('delete called', index);
    data.splice(index, 1)
    setData([...data])
  }


  const editedTodo = (value, index) =>{
    console.log('todo edited called', value);
    data.splice(index, 1, value);
    setData([...data])
  }
  return (
    <>
      <h2 className='text-center font-semibold text-2xl'>Todo App</h2>
      <div className='justify-center flex mt-5'>
        <form onSubmit={addTodo} className='flex' >
          <input type="text" required max={28} id="email" ref={todoVal} placeholder="Enter todo" class="input border-solid border-2 p-3 border-gray-300 w-[20rem] max-w-xs" />
          <button type="submit" class="btn btn-info mb-5 ml-3 w-[65px]">Add todo</button>
        </form>
      </div>
      {data.length > 0 ?  data.map((item, index)=>{
        return <Card key={index} title = {item} deleteTodo = {()=>deleteTodo(index)} editedTodo = {editedTodo} index = {index} />
      }) : <h3 className='text-center font-semibold text-2xl'>No Todo...</h3>}
    </>
  )
}

export default App
