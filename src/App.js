import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox1 from './components/Textbox1';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  if(mode === 'light'){
    document.body.style.backgroundColor='#CBC3E3';
  }

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout (()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#CBC3E3';
      showAlert("Light mode enabled","success");
    }
  }

  return (
    <>
    
    <b><Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode}/></b>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
        <Textbox1 showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
    </div>
    </>
  );
}

export default App;
