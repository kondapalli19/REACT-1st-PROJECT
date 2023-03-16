import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnClick= () => {
        console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClick= () => {
      console.log("lowercase was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
      
  }
  const ClearText= () => {
    console.log("clear the text");
    let newText = "";
    setText(newText);
    
}
const CopyText= () => {
  console.log("copy the text");
 
  let newText = document.getElementById("text");
  navigator.clipboard.writeText(newText.value);
  alert("Copied the text: " + newText.value);
  
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

    const [text, setText] = useState('');
  return (
    <>
    <div>
      <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <form>
  <div className="mb-3">
    <textarea className="form-control" value={text} rows="9"onChange={handleOnChange} aria-describedby="emailHelp" id="text" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}/>
   
  </div>


  
</form>
    <button type="Submit" className='btn btn-primary' onClick={handleOnClick}>Convert To UpperCase</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="Submit" className='btn btn-primary' onClick={handleClick}>Convert To LowerCase</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="Submit" className='btn btn-primary' onClick={ClearText}>Clear Text</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="Submit" className='btn btn-primary' onClick={CopyText}>Copy Text</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="Submit" className='btn btn-primary' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
      <p></p>
    </div>
    </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string.isRequired
    
}
