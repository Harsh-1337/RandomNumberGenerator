import React from 'react'
import styled from "styled-components"
import { useRef } from 'react'
const Wrapper = styled.div`
 textarea{
   font-size:2rem;
   width:70vw;
   height:50vh;
   border:none;
 }
 .output{
   background-color:#FBF8F1;
   padding:5%;
  
 }
 .copy{
   position:absolute;
   margin:2rem;
 }
 .back{
   margin:2rem;
 }
`
export const Output = (props) => {

  let count = props.input.count;
  let lower = props.input.lowerBound;
  let upper = props.input.upperBound;
  let c = count;
  let setFlag = props.reset;
  
  let arr = [];
  while (count>0) {
    var x = Math.floor((Math.random() * upper) + lower);
    if(x>=lower)
      arr.push(x);
    else 
      count++;  
    count--;
  }
  const handleChange = (e)=>{
    setFlag(false);
  }
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    e.preventDefault();
    e.target.innerHTML = "Copied";
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
  };
  return (
    <Wrapper>
      <div className='output'>
      <h2>{c} random number between {lower} to {upper} are : </h2>
      <form>
        <textarea
          ref={textAreaRef}
          defaultValue={arr}
          />
        <button className='copy' onClick={copyToClipboard}>Copy To Clipboard</button>
      </form>
        <button className='back' onClick={handleChange}>Go Back</button>
     </div>
    </Wrapper>
  )
}

export default Output;