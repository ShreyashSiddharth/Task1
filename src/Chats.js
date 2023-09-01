import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ChatPopUp from './ChatPopUp';
import Card from './Card';

function Chats() {
    const [list, setList] = useState([]);
    const [searchTxt , setSearchTxt] = useState("");
    
    const getListURL = 'http://139.59.236.50:5002/getticketlist'

    async function getticketlist(){
      const data = await fetch(getListURL);
      const json = await data.json();
      
     setList(json.data);
     
  }
  useEffect(()=>{
    getticketlist();
  },[])

  console.log(list);
   

  return (
    <div  className='h-screen'>
        <div className='flex'>
        <h1 className='font-bold text-2xl pl-2'>All Chats and Deals</h1>
        <div className='fixed top-0 right-0' >
        <img src="https://i.ibb.co/MSt1pNN/imageedit-1-2526655492.png" width={80} height={80} alt="2" className='inline ' border="0"/>
        <h1 className='font-medium text-lg inline-block mx-4'>Saad<br/>admin</h1>
       
        </div>
        </div>
    <div className='border-[1px] border-gray-500 h-fit mt-16 ml-8 shadow-md p-2 rounded-md w-fit'>
        <input 
            className="  outline-none " 
            type="text" 
            placeholder="Search" 
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
            />
            <button className=' rounded-md'
   
    > <i class="fa fa-search"></i></button>
    </div>
  
<table>
<th className='bg-black text-white font-semibold flex py-3 m-2 w-[1000px]'>
  <th className='ml-4 mr-7'>Photo</th>
  <th className='mx-4 pl-[3rem]'>Requester</th>
  <th className='mx-4 pl-[1rem]'>Subject</th>
  <th className='mx-4 pl-[3rem]'>Message</th>
  <th className='mx-4 pl-[26rem]'>Status</th>
  
</th>
       <div className=''>
       {
        (list.length == 0)? <h1>No data</h1>:
            
        list.map((listItem)=>{
            
            return <Card {...listItem} key ={listItem.tid}/> 
           
        })
    
    
       }
       </div>
    </table>
    </div>
  )
}

export default Chats