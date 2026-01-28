import React from 'react'

function Navbar() {
  return (
    <section>
      <section  className='flex justify-between '>
       
       <div> <h1>Logo</h1></div>

       <div className='flex text-xl gap-4'>
      <a href="">Classes</a>
      <a href="">Teachers</a>
      <a href="">Magzine</a>
      <a href="">Academy</a>
       </div>
       <div className="flex text-xl gap-4">
        <select name="" id="">
          <option className = 'text-sm' value="">English</option>
          <option className = 'text-sm' value="">Hindi</option>
        </select>
        <button>Login</button>
       </div>
    </section>
    </section>
  )
}

export default Navbar