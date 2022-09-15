
import * as React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginImage } from '../../../assets/_index'

const LoginForm = () => {
  const schema = yup.object().shape({

    email: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
    password: yup.string().required('Please enter your password').min(4).max(20)

  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
        <div>
          <img className="w-full min-h-screen object-cover" src={LoginImage} alt="image" />
            <div className="absolute top-4 w-full flex flex-col items-center">
               <span className="text-white text-6xl font-bold uppercase tracking-wider mb-10 sm:text-4xl">waddif</span>
               <div className="bg-white w-max text-center rounded sm:w-full">
                  <div className="text-black text-lg py-5 tracking-wide capitalize">welcome back</div>
                  <div className=" flex border-2 border-blue-500 mx-6">
                    <button className='text-xl p-2'><FcGoogle/></button>
                    <button className="bg-blue-500 text-white py-1 w-96 sm:w-full hover:bg-blue-600">Sign in with Google</button>
                  </div>
                  <div className='flex items-center py-2'>
                    <div className=' ml-6 border border-x-0 border-b-0 border-gray-200 w-1/2'></div>
                    <span className='p-2 text-gray-500'>or</span>
                    <div className=' mr-6 border border-x-0 border-b-0 border-gray-200 w-1/2'></div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className='text-start px-6 space-y-4'>
                    <label>
                        <p className='text-gray-700 py-1'>Email</p>
                        <input type="text" placeholder='Email' className='w-full p-2 bg-gray-100' {... register('email')}/>
                        {errors?.email && <p className='text-xs text-red-600 mt-1 mb-3'>{errors.email.message}</p>}
                    </label>
                    <label>
                        <p className='text-gray-700 py-1'>Password</p>
                        <input type="password" placeholder='Password' className='w-full p-2 bg-gray-100' {... register('password')}/>
                        {errors?.password && <p className='text-xs text-red-600 mt-1 mb-3'>{errors.password.message}</p>}
                    </label>
                    <button className='bg-blue-700 w-full mb-4 text-white py-2 hover:bg-blue-800 rounded'>Sign in</button>
                  </form>

                  <div className='px-6'>
                    <Link to="" className='text-blue-800 text-xs mb-4'>Forget password?</Link>
                  </div>
                    <div className='font-medium text-md my-10'>New to WADDIF? <Link to ="/register" className='text-blue-800'>join now</Link></div>
               </div>
            </div>
        </div>
  )
}
export default LoginForm
