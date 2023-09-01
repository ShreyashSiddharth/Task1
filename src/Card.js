import React , {useState} from 'react'
import ChatPopUp from './ChatPopUp'
import axios from 'axios';

function Card({metadata:{pic , status , subj , usname , uid} , tid , msgs }) {
    const [showChat, setShowChat] = useState(false);
    const sendList = [tid , uid];
    const toggleChat = () => {
        setShowChat(!showChat);
      }
    function handleClose(){
        axios.post('http://139.59.236.50:5002/closeticket', {
            "tid" : tid.toString()
      
      
            } )
            .then(function (response) {
              console.log(response);
              window.location.reload();
            })
            .catch(function (error) {
              console.log(error);
            });

    
   
    }
  return (
    <>
    <div className='flex '>
    <tr className='hover:bg-gray-300 font-semibold flex  py-3 m-2 hover:cursor-pointer w-[1000px] border-b-[1px]'onClick={toggleChat}>
       <td> <img src={pic} alt='pfp' width={80} height={80}  className='mx-4'/></td>
        <td className='mx-4'>{usname}</td>
        <td className='mx-4'>{subj}</td>
        <td className='mx-12'> {msgs[0].msg}</td>
        {(status == "pending" ) ? <td className='text-red-700 ml-auto pr-3 '>{status}</td> :
         <td className='text-green-700 ml-auto pr-3'>{status}</td>
}
    </tr>
    <button className='bg-green-950 text-white rounded-lg inline px-4 my-2' onClick={handleClose}>close</button>
    </div>
      <div className='bottom-8 right-4 fixed'>
      {/*Write chat code here*/}
          <button className="fixed right-4" onClick={toggleChat}>
          {showChat ? <i class="fa fa-times pr-2" aria-hidden="true"></i>:null}
        </button>
        {showChat && (
          <div className=" border-[1px] border-gray-500 shadow-sm  ">
            <ChatPopUp uid ={uid} tid = {tid} />
          </div>
        )}
  </div>
  </>
  )
}

export default Card