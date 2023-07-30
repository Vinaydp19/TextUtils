import React,{useState}  from "react";

function Textform(props){

    const handleuppercase = () => {
        console.log("Handle onclick clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case !", "Success");
    }
    const handlelowercase = () => {
        console.log("Handle onclick clicked" + text);
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to Lower case !", "Success");
    }
    const handleclearcase = () => {
        console.log("Handle onclick clicked" + text);
        
        setText(" ");
        props.showAlert("Clear Text ", "Success");
    }
    const handleOnchange= (event) => {
        console.log("Handle onchange clicked")
        setText(event.target.value);
    }
    const[text,setText]=useState("");
    return (
        <>
        <div className={`mb-3 text-${props.mode ==='light' ? 'dark' : 'light'}`}>
        <h1>Enter The Text To Analyze </h1>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="7" placeholder={props.text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleuppercase}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handlelowercase}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearcase}>Clear Text</button>
        <div className={`mb-3 text-${props.mode ==='light' ? 'dark' : 'light'}`}>
            <h1>Your Summary</h1>
            <p>{text.split(" ").length} words and charaters are {text.length}</p>
            <h1>Preview</h1>
            <p>{text.length>0 ? text :"Enter someting to preview"}</p>
        </div>
        </>
    );
}           
export default Textform;