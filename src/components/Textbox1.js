import React,{useState} from 'react'


export default function Textbox1(props) {
  const [text,setText] = useState('Enter text here');
  // here text stores value entered in textbox and setText stores the updated value of text 
  const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to uppercase","success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase","success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
    //updating the text with value entered in textbox
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
  }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }

  return (
    <>
      <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'#F3E5F5',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

      <div className="class container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
          <h2> Your text Summary</h2>
          <p> {text.split(" ").length} words {text.length} characters </p>
          <p> Time to read:  {0.008*text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter your text in textbox above to preview it here "}</p>
      </div>
    </>
  )
}
