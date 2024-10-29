import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//?  import App1 from './App1.jsx'
//? import App2 from './App2.jsx'

//! import React_Hooks from './React_Hooks/React_Hooks'
import React_Router from "./React_Router/React_Router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}

    {/* <React_Hooks /> */}
    <React_Router />
  </StrictMode>,
)