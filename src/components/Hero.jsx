import React from 'react'

const Hero = () => {
    return (
        <section id='hero'>
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video src='/videos/hero.mp4' autoPlay muted playsInline />

            <button className='mx-auto bg-[#0071E3] text-white rounded-full px-5 py-2'>Buy</button>

            <p className='text-center'>From ₹169900.00 or ₹13325.00 for 12 months</p>

        </section>
    )
}

export default Hero;