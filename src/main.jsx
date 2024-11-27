// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import './index.css'
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <main>
    <img src="/src/assets/react.svg" width="40px" alt='react logo' />
    <h1>fun facts bout react</h1>
    <ul>
      <li>releasted in 2013</li>
      <li>by Jordan Walker</li>
      <li>200k+ stars on github!</li>
      <li>maintained by meta</li>
      <li>powers enterprise and mobile apps!</li>
    </ul>
  </main>
);