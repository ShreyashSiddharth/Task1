import React,{useEffect, useState} from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


import MsgCard from './MsgCard';
function ChatPopUp(props) {
  const [ticketDetails , setTicketDetails] = useState({});

  function getTicketDetails(){
    axios.post('http://139.59.236.50:5002/getticket', {
    "tid" : props.tid.toString(),
     "uid" : props.uid.toString()
} )
    .then(function (response) {
      
      setTicketDetails(response.data.data);
      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
    getTicketDetails()
  },[props.tid])

  console.log( typeof ticketDetails);
  if(ticketDetails){
  console.log(ticketDetails.metadata?.status);
  }
  function getCurrentDateFormatted() {
    console.log(typeof props.tid , props.uid)
    

    
    const currentDate = new Date();
  
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(currentDate.getFullYear()).slice(-2);
  
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }
  
  const formattedDate = getCurrentDateFormatted();

  function getCurrentTimeFormatted() {
    const currentTime = new Date();
  
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }
  
  const formattedTime = getCurrentTimeFormatted();


  
    const [searchTxt , setSearchTxt] = useState("");

    
    function clickHandler(){
      console.warn(searchTxt , formattedDate , formattedTime)
      axios.post('http://139.59.236.50:5002/replyticket', {
      "tid" : props.tid.toString(),
       "uid" : props.uid.toString(),
       "msg" : searchTxt , 
       "date" : formattedDate,
       "time" : formattedTime


      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      setSearchTxt("");
      getTicketDetails();
    }
  return (
    <div className='  bg-white h-3/6 '>
    <div className='pr-20  pl-3  '>
    <h1>Chat Details</h1>
        <div className='flex '>
     
        <img src='https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg' width={40} height={40} alt='pfp' className='inline' />
        <div >
          
      {(!ticketDetails) ? <h3>please wait</h3> : 
        <>
        <h1 className='font-semibold text-base pl-2'>{ticketDetails.metadata?.usname}</h1>
        <h3 className='pl-2'>Status : {ticketDetails.metadata?.status} </h3>
        
        </>
        }
         
        </div>
        </div >
        <div className='h-[10rem] w-[119%] overflow-y-scroll pt-5'>
        {
          (ticketDetails?.msgs?.length == 0)? <h1>Loading</h1>:
            
          ticketDetails?.msgs?.map((msgs)=>{
              
              return <InfiniteScroll dataLength={ticketDetails?.msgs?.length}><MsgCard {...msgs} key={msgs.cid} /></InfiniteScroll>
             
          })
      
        }
        </div>

        <div className=' w-[100%] '>
        <input 
            className="  outline-none bg-gray-200 w-[80%] p-2 m-1 rounded-3xl " 
            type="text" 
            placeholder="Type here..." 
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
            />
            <button  onClick={clickHandler}  className=' rounded-2xl bg-gray-400 px-3 py-2 ' 
   
    > <i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
    </div>
       
    </div>
   
  
       
     
    
    </div>
  )
}

export default ChatPopUp