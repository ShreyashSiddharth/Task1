import React from 'react'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


function Menu() {
  return (
    <div className='bg-gray-300 max-w-max py-3 px-6 h-full min-h-screen'>
        <img src='https://i.ibb.co/0hxDXZM/logo-1.png' className='p-2 flex content-center items-center' height={200} width={200} alt='logo' />
        <div>
            <h1 className='font-bold mt-8'>MENU</h1>
            <ul className=''>
                <li className='my-3'>
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                <h2 className='inline  hover:text-green-800 font-medium cursor-pointer'> 
                 
                 Dashboard</h2>
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <h2 className='inline'>User Management</h2>    
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-users" aria-hidden="true"></i>
                 <h2 className='inline'> Customer Relationship</h2>   
                </li>
                <li className='my-3  hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-file-o" aria-hidden="true"></i>
                  <h2 className='inline'>Content Management</h2>  
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-bars" aria-hidden="true"></i>
                  <h2 className='inline'>Showcase Management</h2>  
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-home" aria-hidden="true"></i>
                 <h2 className='inline'>Home Services Management</h2>   
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                 <h2 className='inline'>Market Place Management</h2>   
                </li>
                <li className='my-3 hover:text-green-800 font-medium cursor-pointer'>
                <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                 <h2 className='inline'>Permission and Role</h2>   
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Menu