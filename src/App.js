import React from 'react'
import Menu from './Menu'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Chats from './Chats';
import { StyledEngineProvider } from '@mui/material/styles';



function App() {
  return (
   
    <StyledEngineProvider injectFirst> 
    <div className='flex'>
        <Menu />
        <Chats/>
    </div>
   </StyledEngineProvider>
  )
}

export default App