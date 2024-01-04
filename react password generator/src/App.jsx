import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
     <section className='align-center items-center'>
      <div className="container rounded p-6 bg-gray-500 items-center w-[20%]">
<form id='pg-form'>
  <div className='flex'>
    <input className='w-[100%] p-1 rounded' type="text" placeholder='Min 8 Char' readOnly />
    <div className='p-1 px-3 text-white rounded bg-blue-500'><i class="fa-regular fa-clipboard"></i></div>
  </div>
</form>

      </div>
     </section>
    </>
  )
}

export default App
