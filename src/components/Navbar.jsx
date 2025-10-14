import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>
            <ul>
                {[
                    {label:'Store'},
                    {label:'Mac'},
                    {label:'iPhone'},
                    {label:'Watch'},
                    {label:'Vision'},
                    {label:'AirPods'}
                ].map(({label})=>(
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button><img src="/search.svg" alt="search" /></button>
                <button><img src="/cart.svg" alt="cart" /></button>
            </div>
             
        </nav>
    </header>
  )
}

export default Navbar