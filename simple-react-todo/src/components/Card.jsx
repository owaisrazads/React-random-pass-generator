import React, { useRef, useState } from 'react'

const Card = ({ title, deleteTodo, editedTodo, index }) => {

    const [showData, setShowData] = useState(true)
    const editedValue = useRef()

    const saveEditTodo = () =>{
        // console.log(editedValue.current.value);
        setShowData(true)
        editedTodo(editedValue.current.value, index)
    }

    const noEditTodo = () =>{
        setShowData(true)

    }
    
    return (
    <>
     {showData ?    <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <button className=' bg-red-200 p-2 rounded-md ml-2 font-semibold hover:bg-red-500 hover:text-white transition-all' onClick={deleteTodo}>Delete</button>
                        <button className='bg-blue-200 p-2 rounded-md ml-2 font-semibold hover:bg-blue-500 hover:text-white transition-all' onClick={()=>setShowData(false)} >Edit</button>
                    </div>
                </div>
            </div>
        </div> : <div className='flex justify-center'><input type="text"  placeholder="Edit Value" className="input input-bordered w-full max-w-xs" ref={editedValue} />
        <button className='bg-blue-200 p-2 rounded-md ml-2 font-semibold hover:bg-blue-500 hover:text-white transition-all' type='submit' onClick={saveEditTodo}  >Save</button>
        <button className=' bg-red-200 p-2 rounded-md ml-2 font-semibold hover:bg-red-500 hover:text-white transition-all' onClick={noEditTodo}>Cancel</button>
            </div>}
    </>
    )
}

export default Card
