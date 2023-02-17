import React from 'react'
import WelcomeImage from "../../assets/images/as_image1.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";


const Details = () => {
  return (
    <>
        <div className='m-3 grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 items-center mt-[0]'>
            <div className='border border-red-700 h-screen'>
                
            </div>
            <div className='border h-screen'>
                <div className='min-h-screen bg-blue-900'>
                    <img src={WelcomeImage} alt="login" className="w-[400px] mx-auto mt-[0.1rem]" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Details