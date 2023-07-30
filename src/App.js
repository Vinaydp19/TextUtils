import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router ,
//   Switch,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";


function App(props) {
  const[mode, setMode]=useState('light'); 

  const [alert, setAlert]=useState(null);


  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

 const  toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor =  '#042743';
      showAlert("dark Mode is enabled", "success");
      setInterval(() => {
        document.title='TextUtils - dark Mode';
      }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode is enabled", "success");
      setInterval(() => {
        document.title='TextUtils - light Mode';
      }, 2000);
    }
  }

  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-5'>
        {/* <Routes> */}
        {/*users
           users/Home
            if we didnt kept exact in the below then it will check partially path
        */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<Textform showAlert={showAlert} text="Enter the text to analyze" mode={mode} />} /> */}
        {/*</Routes>*/}
        <Textform showAlert={showAlert} text="Enter the text to analyze" mode={mode} />
      </div>
    {/* </Router> */}
  </>

  );
}

export default App;




