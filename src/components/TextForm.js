import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase is clicked");
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
      }
      const handleLowClick=()=>{
        // console.log("Uppercase is clicked");
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
      }
      const handleOnChange=(event)=>{
        
        setText(event.target.value);
      }
      const handleClear=()=>{
        setText("");
        props.showAlert("Text has been Cleared","success");
      }
      const handleReverse=(event)=>{
        
        let a=""
        for(let i=text.length-1;i>=0;i--)
        {
          a+=text[i];
        }
        setText(a);
        props.showAlert("Text has been Reversed","success");
      }
      const handleCopy=()=>{
        try{

          navigator.clipboard.writeText(text).then(()=>props.showAlert("Text has been Copied to Clipboard","success")).catch(()=>props.showAlert("Something Went Wrong"))
        }
        catch(error){
          props.showAlert("Text has not been copied","danger");
        }
      
      }
      const handleExtraSpace=()=>{
        let newtext=text.split(/[ ]+/);
        newtext=newtext.join(" ");
        
        setText(newtext.trim())
        props.showAlert("Extra Space has been Removed","success");
    }
   
    const [text,setText]=useState("");
    
  return (
    <>
    <div className='container' style={{color:props.mode==='light'? 'white':'black'}}>
        <h1 className={`text-${props.mode==='light'? 'dark':'light'}`} >{props.heading} </h1>
<div className="mb-3">
  <textarea className={`form-control text-${props.mode==='light'? 'dark':'light'}`} style={{backgroundColor:props.mode==='light'? 'white':'#93cdb7'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleLowClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleCopy}
on
>Copy Text</button>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleReverse}>Reverse Text </button>
<button disabled={text.length===0} className={`btn btn-primary btn-${props.mode==='light'? 'secondary':'info'} mx-2 my-2`} onClick={handleExtraSpace}>Remove Extra Space </button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==='light'? 'black':'white'}}>
        <h2 >Your Text Summary</h2>
        <p >{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        <p >{0.08*(text.split(" ").filter((e)=>{return e.length!==0}).length)} Minutes Read</p>
        <h2 >Preview</h2>
        <p >{text.length>0? text:"Nothing to Preview It Here "}</p>
    </div>
   
    </>
  )
}

