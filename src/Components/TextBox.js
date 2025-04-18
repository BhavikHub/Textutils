import React, {useState} from 'react'

export default function TextBox(props) {
  const [Text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const  handleUpLetters= () =>{
    setText(Text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  };
  const  handleLoLetters= () =>{
    setText(Text.toLowerCase());
    props.showAlert("Converted to Lowercase","success")
  };
  const handleEvents= (event) =>{
    setText(event.target.value);
  }
  const clear=() =>{
    setText("");
    props.showAlert("Text are successfully Cleared","success")
  }
  const increaseTextSize = () => {
    setFontSize(prevSize => prevSize + 2); // Increase font size by 2px
  };
  
  const decreaseTextSize = () => {
    if (fontSize > 8) {  // Prevent decreasing the font size too much
      setFontSize(prevSize => prevSize - 2); // Decrease font size by 2px
    }
  }

  const toggleCopy =()=> {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to Clipboard","success")
  }

  return ( <>
    <div>
      <div className={`mb-3 my-4 text-${props.mode==='light'?'dark':'light'}`}>
  <h1> Enter Your Text To Analyze</h1>
  <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} value={Text} onChange={handleEvents} id="textBox" rows="9" style={{ fontSize: `${fontSize}px`, backgroundColor: props.mode==='light'? 'white':'rgb(64 119 173)'  }}></textarea>
</div>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={handleUpLetters}><i className="bi bi-alphabet-uppercase"></i></button>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={handleLoLetters}><i className="bi bi-alphabet"></i></button>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={clear}><i className="bi bi-trash"></i></button>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={increaseTextSize}><i className="bi bi-alphabet-uppercase"></i><i className="bi bi-plus"></i></button>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={decreaseTextSize}><i className="bi bi-alphabet-uppercase"></i><i className="bi bi-dash"></i></button>
      <button disabled={Text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={toggleCopy}><i className="bi bi-clipboard-minus"></i></button>
    </div>
     <div className={`mt-3 text-${props.mode==='light'?'dark':'light'}`}>
     <p> {Text.trim().split(/\s+/).filter((word) => word.length > 0).length} words {Text.length} characters </p>
     <p> It will take average {0.008 * Text.trim().split(" ").filter((word) => word.length > 0).length} Minutes to Read</p>
     <h2>Preview of the Content</h2>
     <p>{Text.length>0?Text:"Enter Your Text To Preview"}</p>
   </div>
   </>
  )
}