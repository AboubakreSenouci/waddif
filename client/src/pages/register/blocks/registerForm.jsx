import { Link } from 'react-router-dom';

import {RiCheckboxCircleFill} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

import { RegisterImage } from '../../../assets/_index';
import { yupResolver } from '@hookform/resolvers/yup';

const jobs = [   
    'Apply for jobs easily',
    'Receive alerts for the best jobs',
    'Get discovered by top companies',
    'Explore the right jobs & career opportunities' ];

const RegisterForm = () => {

    const schema = yup.object().shape({

        firstname : yup.string().required('Please enter your first name.'),
        lastname : yup.string().required('Please enter your last name.'),
        email : yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        password : yup.string().min(4).max(20).required('Please enter your password .'),

    })

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver : yupResolver(schema),
    })

    const onSubmit = (data) => {
      console.log(data);
    }

    return(

        <div>
            <img className="min-h-screen w-full object-cover object-center" src={RegisterImage} alt="image" />
            <div className=" absolute top-4 w-full grid text-white ">
                <div className='xl:hidden flex justify-between mx-20'>
                    <button className='uppercase font-bold text-4xl '>waddif</button>
                    <button className='bg-green-400 px-3 py-1.5 rounded hover:bg-green-500 h-min'>Employer?</button>
                </div>
                <div className='flex justify-between'>
                    <div className='mt-36 xl:hidden ml-20'> 
                        <p className="capitalize text-3xl font-medium">find the best jobs in algeria</p>
                        <div className='space-y-4 my-8'>
                        {jobs.map((job) => (
                            <div className='flex items-center gap-x-4 text-xl'><RiCheckboxCircleFill/> {job}</div>
                        ))}
                        </div>
                        <p className="capitalize text-3xl font-medium">Trusted by over 25,000 companies</p>
                    </div>
                    <div className='bg-white rounded max-w-lg mt-8 mx-20 sm:w-full sm:mx-0'>
                        <div className="text-black text-lg py-5 tracking-wide capitalize text-center">Sign Up and Start Applying For Jobs</div>
                        <div className=" flex border-2 border-blue-500 mx-6">
                            <button className='text-xl p-2'><FcGoogle/></button>
                            <button className="bg-blue-500 text-white py-1 w-full hover:bg-blue-600">Sign in with Google</button>
                        </div>
                        <div className='flex items-center py-2'>
                            <div className=' ml-6 border border-x-0 border-b-0 border-gray-200 w-1/2'></div>
                            <span className='p-2 text-gray-500'>or</span>
                            <div className=' mr-6 border border-x-0 border-b-0 border-gray-200 w-1/2'></div>
                        </div>
                        <form  onSubmit={handleSubmit(onSubmit)} className='text-start px-6 text-black'>
                            <div className='flex gap-x-4 mb-4'>
                                <label className='w-1/2'> 
                                    <p className='text-gray-700 py-1'>First name</p>
                                    <input type="text" placeholder='First name' className='border p-2 w-full border-gray-500' {... register('firstname')}/>
                                    <p className='text-xs text-red-600 mt-1 '>{errors.firstname?.message}</p>
                                </label>
                                <label className='w-1/2'> 
                                    <p className='text-gray-700 py-1'>Last name</p>
                                    <input type="text" placeholder='Last name' className='border p-2 w-full border-gray-500' {... register('lastname')}/>
                                    <p className='text-xs text-red-600 mt-1 '>{errors.lastname?.message}</p>
                                </label>
                            </div>
                          <label> 
                                <p className='text-gray-700 py-1'>Email</p>
                                <input type="text" placeholder='waddif@gmail.com' className='w-full border p-2 border-gray-500' {... register('email')}/>
                                <p className='text-xs text-red-600 mt-1 mb-3'>{errors.email?.message}</p>
                          </label>
                          <label> 
                                <p className='text-gray-700 py-1'>Password</p>
                                <input type="password" placeholder='********' className='w-full border p-2 border-gray-500' {... register('password')}/>
                                <p className='text-xs text-red-600 mt-1 mb-3'>{errors.password?.message}</p>
                          </label>
                          <button className='bg-blue-700 w-full mb-4 text-white py-2 mt-4 hover:bg-blue-800 rounded'>Sign in</button>
                        </form>
                        <div className='text-gray-500 text-center text-xs'>By signing up, you agree to our <Link to="" className='text-blue-600'>Terms and Conditions </Link></div>
                        <div className='mx-6 my-4'>
                            <div className='border border-x-0 border-b-0 border-gray-200 w-full'></div>
                        </div>
                        <div className=' text-md text-center text-black pb-10'>Already in WADDIF? <Link to ="/login" className='text-blue-800'> Sign in </Link></div>
                        <div className='bg-blue-100 text-center py-4'>
                        <div className=' text-sm text-center text-gray-600'>Looking to post jobs? <Link to ="/login" className='text-blue-800'> Create an Employer Account. </Link></div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}
export default RegisterForm;