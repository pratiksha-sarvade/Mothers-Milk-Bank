import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App"; // Import your main App component
// import projectRoute from "./projectRoute"; // <--- Remove or comment out this line
// In your main App.js or index.js
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Render your App component directly, as App.js already contains BrowserRouter */}
    <App />
  </React.StrictMode>
);