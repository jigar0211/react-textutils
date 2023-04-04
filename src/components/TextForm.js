import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpper = () => {
        setText(text.toUpperCase());
    }
    const handleLower = () => {
        setText(text.toLowerCase());
    } 
    const handleClearText = () => {
        setText('');
    }
    const handleRemoveExtraSpeaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCoppyText = () => {
        const text = document.querySelector('#example');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCamelCase = () => {
        let words = text.trim().split(/\s+/);
        let camelCaseText = "";
      
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          if (word.length === 1) {
            camelCaseText += word.toUpperCase();
          } else {
            camelCaseText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
          if (i < words.length - 1) {
            camelCaseText += " ";
          }
        }
        setText(camelCaseText);
      };
                    
  return (
    <>
    <div className="container" style={{backgroundColor: props.mode === 'dark'? 'grey': 'white'}}>
    <h1 className='mt-2' style={{color: props.mode === 'dark'? 'white': 'black'}}>{props.heading}</h1>
    <div className="form">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'? 'white': 'black'}} id="example"></textarea>
        {/* <textarea className="form-control"  id="floatingTextarea"></textarea> */}
    </div>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleUpper}>UPPERCASE</button>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleLower}>lowercase</button>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleCamelCase}>CamelCase</button>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleClearText}>Clear</button>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleCoppyText}>CoppyText</button>
            <button className="btn btn-primary mt-2 mx-2" onClick={handleRemoveExtraSpeaces}>RemoveExtraSpeaces</button>
    </div>
    <div className="container" style={{backgroundColor: props.mode === 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something Into Input To Preview Here..."}</p>
    </div>
    </>
  )
}
