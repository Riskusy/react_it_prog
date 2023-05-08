import React from 'react';
import App from './App';
import * as ReactDom from 'react-dom/client';
import './css/main.css';



// Old school
// const elements = (
//   <div className="name">
//     <h1>{helpText}</h1>
//     <input placeholder={helpText}
//       onClick={inputClick} onMouseEnter={mouseOver}
//       />
//       <p>{helpText === "Help text" ? "Yes" : "No"}</p>
//   </div>
// )
//  Старый формат
// const app = document.getElementById("app")
// ReactDOM.render(elements, app)

// Новый формат

ReactDom.createRoot(document.getElementById('app')).render(
  // elements
  <App />
)