import React from 'react'
import { useNavigate } from "react-router-dom";
import WelcomeImage from "../../assets/images/as_image1.jpeg";
import LogoImage from "../../assets/images/as_image5.jpeg";
import Container from '../../Layout/Container/Container';

const Welcome = () => {
  return (
    <>
        <section className="relative min-h-screen">
            <div className="absolute right-0">
                <img src={LogoImage} alt="login" className="w-[20%] mx-auto mt-[0.1rem]" />
            </div>
            <Container className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 items-center absolute left-10 mt-[5%]">
                <div className='p-10 min-h-screen bg-white mx-auto relative'>
                    <h1 className='text-black font-bold text-5xl font-serif text-center'>Welcome</h1>
                    <p className='text-center text-2xl mt-4 font font-light'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed? Cumque nihil culpa quasi eaque sequi perspiciatis enim quaerat quidem eveniet ad, eos dicta recusandae voluptates animi porro natus! Modi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed? Cumque nihil culpa quasi eaque sequi perspiciatis enim quaerat quidem eveniet ad, eos dicta recusandae voluptates animi porro natus! Modi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed? Cumque nihil culpa quasi eaque sequi perspiciatis enim quaerat quidem eveniet ad, eos dicta recusandae voluptates animi porro natus! Modi?
                    </p>
                    <div className='absolute right-[30%] flex flex-col'>
                        <button 
                            type="submit"
                            className='bg-blue-300 px-4 py-2.5 rounded-3xl w-[300px]'
                        >
                            Get Started
                        </button>
                        <p 
                            className='text-center'
                        >
                            Already have an account ? <span className=' text-blue-500 cursor-pointer'> Login</span> 
                        </p>
                    </div>
                    
                </div>
                <div className='min-h-screen bg-white'>
                    <img src={WelcomeImage} alt="login" className="w-[450px] mx-auto mt-[0.1rem]" />
                </div>
            </Container>
        </section>
    </>
  )
}

export default Welcome